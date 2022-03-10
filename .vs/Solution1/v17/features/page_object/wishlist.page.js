const { expect, assert } = require("chai");

class WishlistPage {

    lowestPriceItemNumber = 0;
    
    async navigate() {
        await page.click('.la-heart');
    }

    async checkItemCount(number) {
        const rows = await page.$$('#table.tr');
        assert(rows.length == number);
    }

    async searchForLowestPricedItem() {
        const rows = await page.$$('#td.product-price');
        let price = 0.0;
        for(let i=0; i < rows.length; i++) { 
            let currentPrice = parseFloat(items.textContent.trim());
            if(currentPrice > price) {
                price = currentPrice;
                this.lowestPriceItemNumber = i;
            }
        }
    }
    
    async addLowestPricedItemToCart() {
        const items = await page.$$('text=Add to wishlist');
        items[this.lowestPriceItemNumber].click();
    }

  }
  module.exports = { WishlistPage };