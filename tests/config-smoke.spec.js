const {test,expect}=require('@playwright/test');
const {openLoginPage}=require('./helper');

test('Config smoke test',async({page})=>{
    /*page fixture can handles creation of new empty context and
    new tab for this current test*/
    await page.goto('/login');
    await expect(page).toHaveTitle(/EventHub/i);
    const emailField = page.locator('#email');
    await expect(emailField).toBeVisible();
    const signInButton = page.getByRole('button',{ name: 'Sign In' });
    await expect(signInButton).toBeVisible();
})

test('Config smoke test - 2',async({page,browser})=>{
    /*browser fixture is browser context which is has seperate browser session
    container that can create its own pages.*/
    await openLoginPage(page);
    const emailField = page.locator('#email');
    await emailField.fill('beginner@sample.com');
    await expect(await emailField.inputValue()).toBe('beginner@sample.com');
    //Fresh browsercontext and page has been created from that first browser
    const isolatedContext = await browser.newContext();
    const isolatedPage = await isolatedContext.newPage();
    const baseURL = test.info().project.use.baseURL;
    await isolatedPage.goto(`${baseURL}/login`);
    await expect(isolatedPage).toHaveTitle(/EventHub/i);
    await expect(await isolatedPage.locator('#email').inputValue()).toBe('');
    await isolatedContext.close();
})