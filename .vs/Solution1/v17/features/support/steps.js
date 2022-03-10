const {Given, When, Then} = require ('cucumber')
const {HomePage} = require('../page_object/home.page')
const {ShopPage} = require('../page_object/shop.page')
const {WishlistPage} = require('../page_object/wishlist.page')
const {CartPage} = require('../page_object/cart.page')

const homepage = new HomePage();
const shoppage = new ShopPage();
const wishlistpage = new WishlistPage();
const cartpage = new CartPage();

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

Given('I add {int} different products to my wish list', async(number)=>{
    await homepage.navigate();
    await shoppage.navigate();
    await shoppage.addItemsToWishlist(number);
 });

When('I view my wishlist table',async() =>{
    await wishlistpage.navigate();
});

Then('I find total {int} selected items in my Wishlist', async(number) => {
    wishlistpage.checkItemCount(number);
});

When('I search for lowest price product',async() =>{
    wishlistpage.searchForLowestPricedItem();
});

Then('I am able to add the lowest price item to my cart',async() =>{
    wishlistpage.addLowestPricedItemToCart();
});

Then('I am able to verify the item in my cart',async() =>{
    cartpage.navigate();
    cartpage.verifyItemInCart();
});