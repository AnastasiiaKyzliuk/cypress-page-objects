const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    pageLoadTimeout: 10000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
