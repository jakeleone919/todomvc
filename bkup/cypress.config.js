const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pn5ohf',
  env: {
    login_url: '/login',
  },
  "retries": {
    "runMode": 1,
    "openMode": 1
  },
  e2e: {
    "baseUrl": "https://www.yahoo.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
