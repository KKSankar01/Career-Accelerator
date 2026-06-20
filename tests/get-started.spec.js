const { test, expect } = require('@playwright/test');
const { openLoginPage } = require('./helper');

test('EventHub login page loads - 1', async ({ page }) => {
    /*Playwright actions return promises and await ensures each step 
    completes before continuing, reducing timing issues and flaky tests.*/
    await openLoginPage(page);
    await expect(page.getByPlaceholder('you@email.com')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
});

test('EventHub login page loads - 2', async ({page})=>{
    await openLoginPage(page);
    await expect(page.getByLabel('Password')).toBeVisible();
    await expect(page.url()).toContain('/login');
    await expect(await page.title()).toBe('EventHub — Discover & Book Events');
});