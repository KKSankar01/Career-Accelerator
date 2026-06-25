const {test,expect}=require('@playwright/test');
const {openLoginPage, createBookingFromFilters, findBookingCardByRef, openBookingDetailFromCard} = require('./helper');

const email = 'sankarkuppusamykenjin@gmail.com';
const password = 'KLSP@family01';
let response1,response2;
let bookingRefOne,bookingRefTwo;
let bookingData1,bookingData2;
    bookingData1={ searchText: 'World', category: 'Conference', city: 'Hyderabad', quantity: 1, customerName: 'Sankar K K', customerEmail: email, phone: '9384352990' };
    bookingData2={ searchText: 'Dilli', category: 'Festival', city: 'Delhi', quantity: 2, customerName: 'Sankar K K', customerEmail: email, phone: '9384352990' };

test.describe.serial('Assignment-4 flow', ()=>{
test('Create two bookings and preserve both runtime payloads', async ({page})=>{
    await openLoginPage(page, expect, '/login', email, password);
    response1=await createBookingFromFilters(page, expect, bookingData1 );
    const bookingRefOne = response1.bookingRef;
    await expect(response1.eventTitle).toContain(bookingData1.searchText);
    await expect(bookingRefOne).not.toBe('');
    await expect(response1.tickets).toBe(bookingData1.quantity);
    // verify booking1 persisted in My Bookings before proceeding
    await page.getByRole('button',{name:'View My Bookings'}).click();
    await page.locator('#booking-card', { hasText: bookingRefOne }).first().waitFor({ state: 'visible', timeout: 15000 });
    // return to events to create the second booking
    await page.locator('#nav-events').click();
    response2 = await createBookingFromFilters(page, expect, bookingData2);
    const bookingRefTwo = response2.bookingRef;
    await expect(bookingRefTwo).not.toEqual(bookingRefOne);
    await expect(response2.eventTitle).not.toEqual(response1.eventTitle);
    await expect(response2.tickets).toEqual(bookingData2.quantity);
    // verify both bookings appear in My Bookings
    await page.getByRole('button',{name:'View My Bookings'}).click();
    await page.locator('#booking-card', { hasText: bookingRefOne }).first().waitFor({ state: 'visible', timeout: 15000 });
    await page.locator('#booking-card', { hasText: bookingRefTwo }).first().waitFor({ state: 'visible', timeout: 15000 });
    // await findBookingCardByRef(page,expect,response1);
    // await findBookingCardByRef(page,expect,response2);
    const fs = require('fs');
    const out = { response1, response2 };
    fs.mkdirSync('tests/Assignment-4/tmp', { recursive: true });
    fs.writeFileSync('tests/Assignment-4/tmp/bookings.json', JSON.stringify(out, null, 2));
})

test('Reconcile My Bookings cards with the correct detail pages',async({page})=>{
    await openLoginPage(page,expect,'/bookings',email,password);
    await page.goto(process.env.Base_URL + '/bookings');
    await expect(await page.locator('#nav-bookings')).toBeVisible();
    await page.locator('#nav-bookings').click();
    const refs = await page.locator('#booking-card div div div span.booking-ref').allTextContents();
    console.log('Found booking refs:', refs);
    const fs = require('fs');
    const data = JSON.parse(fs.readFileSync('tests/Assignment-4/tmp/bookings.json', 'utf8'));
    console.log(data);
    const response1 = data.response1;
    const response2 = data.response2;
    // use response1/response2 as before
    const event1ref = await findBookingCardByRef(page,expect,response1);
    const event2ref = await findBookingCardByRef(page,expect,response2);
    if (!event1ref || !event1ref.bookingCards) throw new Error('Booking card for response1 not found: ' + (response1 && response1.bookingRef));
    if (!event2ref || !event2ref.bookingCards) throw new Error('Booking card for response2 not found: ' + (response2 && response2.bookingRef));
    const card1 = event1ref.bookingCards.nth(Number(event1ref.bookedCardCountPlace));
    const card2 = event2ref.bookingCards.nth(Number(event2ref.bookedCardCountPlace));
    await expect(card1).toBeVisible();
    await expect(card2).toBeVisible();
    await expect(await card1.locator('span.inline-flex').textContent()).toBe('confirmed');
    await expect(await card2.locator('span.inline-flex').textContent()).toBe('confirmed');
    await expect(await card1.locator('.text-base').textContent()).toBe(response1.eventTitle);
    await expect(await card2.locator('.text-base').textContent()).toBe(response2.eventTitle);
    await expect(await card1.locator('.gap-x-4 span:nth-child(2)').textContent()).toContain(String(response1.tickets));
    await expect(await card2.locator('.gap-x-4 span:nth-child(2)').textContent()).toContain(String(response2.tickets));
    await expect(await card1.locator('.text-xl').textContent()).toBe(response1.total);
    await expect(await card2.locator('.text-xl').textContent()).toBe(response2.total);
    await expect(await card1.locator('.booking-ref').textContent()).not.toEqual(card2.locator('.booking-ref').textContent());
    await openBookingDetailFromCard(page,expect,card1,response1);
    await page.goto('/bookings');
    await openBookingDetailFromCard(page,expect,card2,response2);
    await expect(await page.locator('.py-1').textContent()).not.toBe(response1.bookingRef);

})
});


