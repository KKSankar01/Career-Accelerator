require('dotenv').config();

/**
 * @typedef {import('@playwright/test').Page} Page 
 * @typedef {import('@playwright/test').Expect} Expect
 */

/** @param{Page} page */
/** @param{Expect} expect */
async function openLoginPage(page,expect){
    await page.goto(process.env.BASE_URL+'/login');
    await page.getByPlaceholder('you@email.com').fill('sankarkuppusamykenjin@gmail.com');
    await page.locator('#password').fill('KLSP@family01');
    await page.getByRole('button',{name:'Sign In'}).click();
    await expect(await page.getByRole('link',{name:'Browse Events →'})).toBeVisible();   
}

/** @param{Page} page */
async function getEventCards(page){
    return page.locator('#event-card');
}


async function parseSeatCount(text){
    const match = text.match(/\d+/);
    return match ? Number(match[0]):0;
}

module.exports={openLoginPage,getEventCards,parseSeatCount};

