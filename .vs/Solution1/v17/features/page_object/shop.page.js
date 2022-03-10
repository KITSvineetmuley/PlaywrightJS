const { expect } = require("chai");

class ShopPage {

    async navigate() {
        await page.click('text=Shop');
    }

    async addItemsToWishlist(number) {
        const links = await page.$$('div.product-wishlist > div > div > a > span');
        for(const link of links) { 
            await link.click({timeout:5000});
        }
    }


  }
  module.exports = { ShopPage };