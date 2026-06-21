require('dotenv').config();

async function openLoginPage(page) {
    await page.goto(process.config.BASE_URL + '/login');
}

async function getEmailField(page) {
    return page.getByPlaceholder('you@email.com');
}
module.exports = { openLoginPage, getEmailField };