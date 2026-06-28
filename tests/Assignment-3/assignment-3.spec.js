const {test,expect}=require('@playwright/test');
const {openLoginPage,getEventCards,parseSeatCount}=require('./helper');

test.beforeEach('Events List Locators and Text Assertions-1', async ({page})=>{
    await openLoginPage(page,expect);
    await page.getByRole('link',{name:'Browse Events →'}).click();
    await expect(await page.locator('.text-3xl').textContent()).toBe('Upcoming Events');
    await page.getByPlaceholder('Search events, venues…').fill('World');
    await page.locator('select').first().selectOption({label:'🎙 Conference'});
    await page.locator('select').last().selectOption({label:'Hyderabad'});
    await expect(page.locator('.appearance-none').first()).toHaveValue('Conference');
    await expect(page.locator('.appearance-none').last()).toHaveValue('Hyderabad');
    const eventcards=await getEventCards(page);
    await expect(eventcards.first()).toBeVisible({timeout: 10000});
    const filteredEventCard=await eventcards.filter({hasText:'World Tech Summit'});
    await expect(filteredEventCard).toHaveCount(1);
    await expect(filteredEventCard).toBeVisible();
    const eventTitle = await filteredEventCard.locator('h3').textContent();
    const eventPriceText = await filteredEventCard.locator('p').textContent();
    const eventSeatsText = await filteredEventCard.locator('>div:nth-of-type(2)>div:nth-of-type(2) div span').textContent();
    expect(eventTitle).toBe('World Tech Summit');
    expect(eventPriceText).toContain('$');
    const valueText = await parseSeatCount(eventSeatsText);
    const value= Number(valueText);
    await expect(value).toBeGreaterThan(0);
    const bookNowLink = filteredEventCard.getByRole('link', { name: 'Book Now' });
    await expect(bookNowLink).toBeVisible({ timeout: 10000 });
    await Promise.all([
        page.waitForURL('**/events/**', { timeout: 10000 }),
        bookNowLink.click(),
    ]);
    await expect(page.locator('div h1')).toBeVisible({ timeout: 10000 });
    await expect(page.url()).toContain('/events/');
    await expect(await page.locator('div h1').textContent()).toBe(eventTitle);
    await expect(await page.locator('.mb-4 span').textContent()).toBe(eventPriceText);
});

test('@Assignment3 Events List Locators and Text Assertions-2',async({page})=>{
    await page.goBack();
    await page.getByPlaceholder('Search events, venues…').fill('');
    await page.locator('select').nth(0).selectOption({label:'All Categories'});
    await page.locator('select').nth(1).selectOption({label:'All Cities'});
    await page.waitForLoadState('networkidle');
    const eventcards=await getEventCards(page);
    const count=await eventcards.count();
    await expect(count).toBeGreaterThan(2);
    const firstEventHeading=eventcards.first().locator('>div:nth-of-type(2) a h3');
    const lastEventHeading=eventcards.last().locator('>div:nth-of-type(2) a h3');
    const secondEventHeading=eventcards.nth(1).locator('>div:nth-of-type(2) a h3');
    await firstEventHeading.textContent();
    await lastEventHeading.textContent();
    await secondEventHeading.textContent();
    await expect(await firstEventHeading.textContent()).not.toBe('');
    await expect(await firstEventHeading.textContent()).not.toEqual(await lastEventHeading.textContent());
})