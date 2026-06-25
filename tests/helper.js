require('dotenv').config();

async function openLoginPage(page) {
    await page.goto(process.env.BASE_URL + '/login');
}

/**
 * @param {import('@playwright/test').Page} page
 */
async function getEmailField(page) {
    return page.getByPlaceholder('you@email.com');
}
module.exports = { openLoginPage, getEmailField };