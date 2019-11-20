
Feature('@AUTOMATIONPRACTICE');
/**
 * Login at page http://automationpractice.com/index.php
 * Search products
 * Select the itens 1, 3, 4 of grid
 * Add to cart
 * Checkout and Finish the order.
 */
Scenario('Filter and buy two grid products', async function (I, automationPractice) {
    //enter at page
    I.amOnPage('http://automationpractice.com/index.php');
    //login with object
    automationPractice.loginPage(logindata);
    //search and add to cart with arrays
    productSearch.productName.forEach((value, index) => {
        automationPractice.searchProduct(productSearch.productName[index]);
        productSearch.positionsGridAddToCart.forEach((value, index) => {
            automationPractice.addProductsToCart(productSearch.positionsGridAddToCart[index]);
        })
    });        
    //checkout default, next, next, finish
    automationPractice.checkoutDefault(productSearch);
});

AfterSuite(async function (I) {
   I.click('Sign out');
});

var logindata = {
    email: 'fernandohassi@gmail.com',
    password: 'EFsvNT5rr5@jLPw',
    name: 'Fernando Hassi'
}

var productSearch = {
    productName: ['Printed'],
    positionsGridAddToCart: ["1", "3", "4"]
}