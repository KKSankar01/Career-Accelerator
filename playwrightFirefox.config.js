const { devices } = require('@playwright/test');

require('dotenv').config();

const config = {
  testDir: './tests',
  retries: 0,
  workers: 1,
  timeout: 30000,
  reporter: [["line"], ["allure-playwright"]],

  projects: [
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        headless: true
      }
    }
  ],

  use: {
    baseURL: 'https://eventhub.rahulshettyacademy.com',
    headless: false,
  }
};

module.exports = config;
