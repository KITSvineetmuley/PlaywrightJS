const { expect } = require("chai");

class CartPage {

    async navigate() {
        await page.click('css=div.header-cart.div.div.a');
    }

    async verifyItemInCart() {
        const rows = await page.$$('#table.tr');
        assert(rows.length == 2);
    }


  }
  module.exports = { CartPage };