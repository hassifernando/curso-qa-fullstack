
Feature('@HOME - @AUTOMATIONPRACTICE');
/**
 * Login at page http://automationpractice.com/index.php
 * Search products
 * Select the itens 1 and 3 of grid
 * Add to cart
 * Checkout
 */
Scenario('LOGIN TEST', async function (I, automationPractice) {
    
    I.amOnPage('http://automationpractice.com/index.php');
    automationPractice.loginPage(logindata);
    productSelect.positionsGridAddToCart.forEach((value, index) => {
        automationPractice.searchProduct(productSearch);
        automationPractice.addProductsToCart(productSelect.positionsGridAddToCart[index]);
    })
});

var logindata = {
    email: 'fernandohassi@gmail.com',
    password: 'EFsvNT5rr5@jLPw',
    name: 'Fernando Hassi'
}

var productSearch = {
    productName: 'Printed'
}

var productSelect = {
    positionsGridAddToCart: ["1","3","4"]
}