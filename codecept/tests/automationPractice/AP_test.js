
Feature('@HOME - @AUTOMATIONPRACTICE');
/**
 * 
 */
Scenario('LOGIN TEST', async function (I, automationPractice) {
    
    I.amOnPage('http://automationpractice.com/index.php');
    automationPractice.loginPage(logindata);
    automationPractice.searchProduct(productSearch);
    automationPractice.addProductsToCart(productPosition);
});

var logindata = {
    email: 'fernandohassi@gmail.com',
    password: 'EFsvNT5rr5@jLPw',
    name: 'Fernando Hassi'
}

var productSearch = {
    productName: ['Printed']
}

var productPosition = {
    positionsGridAddToCart: [1]
}