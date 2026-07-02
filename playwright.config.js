const { devices } = require('@playwright/test');

require('dotenv').config();

const config = {
  testDir: './tests',
  retries: 1,
  workers: 1,
  timeout: 30000,
  reporter: [["list"], ["allure-playwright"]],

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        headless: false,
        // ...devices[''],
        screenshot: 'retain-on-failure',
        video: 'off',
        trace: 'retain-on-failure',
      }
    },
  ],

  use: {
    baseURL: 'https://eventhub.rahulshettyacademy.com',
    headless: false,
  }
};

module.exports = config;
