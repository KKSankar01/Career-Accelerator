require('dotenv').config();



/**
 * @typedef {import('@playwright/test').Page} Page
 * @typedef {import('@playwright/test').Expect} Expect
 */

/**
 * @typedef {Object} BookingResponse
 * @property {string} eventTitle
 * @property {string} bookingRef
 * @property {number} tickets
 */

/**
 * @param {Page} page
 * @param {Expect} expect
 * @param {string} endpoint
 * @param {string} email
 * @param {string} password
 */
async function openLoginPage(page, expect, endpoint, email, password) {
    await page.goto(process.env.Base_URL + endpoint);
    await page.getByPlaceholder('you@email.com').fill(email);
    await page.locator('#password').fill(password);
    await page.getByRole('button',{name:'Sign In'}).click();
    await expect(await page.locator('#user-email-display').textContent()).toBe(email);
    await expect(await page.locator('#logout-btn').textContent()).toBe('Logout');
    await page.getByRole('link',{name:'Browse Events →'}).click();

}

/**
 * @param {Page} page
 * @param {Expect} expect
 */
async function createBookingFromFilters(page, expect, bookingData){
    let response ={};
    const {searchText,category,city,quantity,customerName,customerEmail,phone}=bookingData;
    await page.getByPlaceholder('Search events, venues…').fill(searchText);
    await page.locator('select').first().selectOption(category);
    await page.locator('select').nth(1).selectOption(city);
    const count = await page.locator('#event-card').count();
    const bookNowButton = page.locator('#book-now-btn');
    if(count===1){
        await expect(bookNowButton).toBeVisible();
        await expect(bookNowButton).toBeEnabled();
        await bookNowButton.click();
    }else{
        await expect(bookNowButton.nth(0)).toBeVisible();
        await expect(bookNowButton.nth(0)).toBeEnabled();
        await page.locator('#book-now-btn').nth(0).click();
    }
    const stringQuantity = await page.locator('#ticket-count').textContent();
    let retrievedQuantity = Number(stringQuantity);
    while (retrievedQuantity < quantity) {
        await page.getByRole('button', { name: '+' }).click();
        retrievedQuantity++;
    }
    await expect(retrievedQuantity).toBe(quantity);
    await page.getByPlaceholder('Your full name').fill(customerName);
    await page.getByPlaceholder('you@email.com').fill(customerEmail);
    const inputEmail=await page.getByPlaceholder('you@email.com').inputValue();
    await page.locator('#phone').fill(phone);
    await page.locator('#confirm-booking').click();
    const eventTitle = await page.locator('h1.text-2xl').textContent();
    const bookingRef = await page.locator('.booking-ref').textContent();
    const tickets= await await page.locator('//span[text()="Tickets"]/following-sibling::span').textContent();
    const total= await await page.locator('//span[text()="Total"]/following-sibling::span').textContent();
    response.eventTitle=eventTitle;
    response.bookingRef=bookingRef;
    response.tickets=Number(tickets);
    response.total=total;
    response.inputEmail=inputEmail;
    await page.waitForLoadState('networkidle');
    return response;
    await page.page()
}

/**
 * @param {Page} page 
 * @param {Expect} expect 
 * @param {BookingResponse} response
 */
async function findBookingCardByRef(page, expect, response){
    const bookingCards = page.locator('//div[@id="booking-card"]');
    const bookingCount = await bookingCards.count();
    const bookingRef = response && response.bookingRef ? response.bookingRef : response;
    if (!bookingRef) throw new Error('findBookingCardByRef requires a bookingRef or response object');
    // wait for the bookings list to appear
    await page.waitForSelector('#booking-card', { timeout: 15000 });
    // ensure at least one card is visible
    await bookingCards.first().waitFor({ state: 'visible', timeout: 15000 }).catch(() => {});
    let eventCardDetails = {};
    let bookingCardCountPlace = undefined;
    for (let i = 0; i < bookingCount; i++) {
        const refHandle = bookingCards.nth(i).locator('div div div span.booking-ref');
        const text = (await refHandle.textContent() || '').trim();
        if (text === bookingRef) {
            console.log('Booked Event available in My bookings ' + bookingRef);
            eventCardDetails.bookingCards = bookingCards;
            bookingCardCountPlace = i;
            break;
        }
    }
    eventCardDetails.bookedCardCountPlace = bookingCardCountPlace;
    return eventCardDetails;
}

/**
 * 
 * @param {BookingResponse} response 
 * @param {Page} page
 * @param {Expect} expect 
 */
async function openBookingDetailFromCard(page, expect, card, response){
    await card.getByRole('button',{name:'View Details'}).click();
    await page.locator('//span[text()="Booking ID"]/following-sibling::span').waitFor({stat:'visible',timeout:15000})
    await expect(await page.locator('.py-1').textContent()).toBe(response.bookingRef);
    await expect(await page.locator('.text-2xl').textContent()).toBe(response.eventTitle);
    await expect(await page.locator('//span[text()="Email"]/following-sibling::span').textContent()).toBe(response.inputEmail);
    await expect(await page.locator('//span[text()="Tickets"]/following-sibling::span').textContent()).toBe(String(response.tickets));
    await expect(await page.locator('//span[text()="Booking ID"]/following-sibling::span')).toBeVisible();
}

module.exports = { openLoginPage, createBookingFromFilters, findBookingCardByRef, openBookingDetailFromCard };