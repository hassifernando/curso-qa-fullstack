
Feature('@HOME - @AUTOMATIONPRACTICE');
/**
 * Login at page http://automationpractice.com/index.php
 * Search products
 * Select the itens 1 and 3 of grid
 * Add to cart
 * Checkout
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
    let quantidadeProdutos = productSearch.positionsGridAddToCart.length;
    console.log(quantidadeProdutos);
    pause();
    //checkout
    I.click('Cart');
    I.click('//span[text()="Proceed to checkout"]');
    I.click('//span[text()="Proceed to checkout"]');
    I.checkOption('#cgv');
    I.click('//span[text()="Proceed to checkout"]');

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

