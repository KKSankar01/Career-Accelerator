// Logs into EventHub and verifies navbar is visible
async function login(page, email, password) {
  await page.goto('https://eventhub.rahulshettyacademy.com/login');

  await page.locator('input[type="email"]').fill(email);
  await page.locator('input[type="password"]').fill(password);
  await page.locator('button[type="submit"]').click();

  // Authenticated navbar should be visible after login
  const navbar = page.locator('nav');
  await navbar.waitFor({ state: 'visible' });
}

module.exports = { login };
