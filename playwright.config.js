require('dotenv').config();

const config = {
  testDir: './tests',
  retries: 0,
  timeout: 60000,

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    },
    // {
    //   name: 'firefox',
    //   use: { browserName: 'firefox' }
    // }
  ],

  use: {
    baseURL: 'https://eventhub.rahulshettyacademy.com',
    headless:false,
  }
};

module.exports = config;
