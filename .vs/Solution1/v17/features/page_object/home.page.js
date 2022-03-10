const { expect } = require("chai");

class HomePage {

    async navigate() {
        await page.goto('https://testscriptdemo.com/');
    }

  }
  module.exports = { HomePage };