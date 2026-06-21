const config = {
  testDir: './tests',
  retries: 0,

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' }
    }
  ],

  use: {
    baseURL: 'https://eventhub.rahulshettyacademy.com',
    headless:false,
  }
};

module.exports = config;
