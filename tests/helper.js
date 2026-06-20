require('dotenv').config();

async function openLoginPage(page) {
    await page.goto(process.env.BASE_URL + '/login');
}

module.exports = { openLoginPage };