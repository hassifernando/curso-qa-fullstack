'use strict';
let I;

I = require('../../steps_file.js')();

const XPATH_CUSTOMERACCOUNT_SPAN = '//*[@id="header"]/descendant::a[contains(@title, "View my customer account")]/span';
const XPATH_CHECKOUTTITLE_H1 = '//*[@id="center_column"]/descendant::h1';
const XPATH_PROCEEDTOCHECKOUT_BUTTON = '//*[contains(@class,"button btn btn-default") and contains(@class,"button-medium")]/descendant::span/i';

//write the necessary functions for this page
module.exports = function () {
    return actor({

        /**
         * This function will login with object data and assert with full name of user
         * @param {object} parameters
         * email: 'string',
         * password : 'string',
         * name: 'string'
         */
        loginPage: function (parameters) {
            I.click('Sign in');
            I.fillField('#email', parameters.email);
            I.fillField('#passwd', parameters.password);
            I.click('#SubmitLogin');
            I.waitForText(parameters.name, XPATH_CUSTOMERACCOUNT_SPAN);
        },
        /**
         * This function will perform a search with the main filter.
         * @param {object} parameters
         * array string
         */
        searchProduct: function (parameters) {
            I.fillField('#search_query_top', parameters);
            I.click('Search');
        },
        /**
         * This function will add to the cart the grid positions sent in the object.
         * @param {object} parameters
         */
        addProductsToCart: function (parameters) {
            let XPATH_POSITIONADDTOCART_SPAN = `//*[@id="center_column"]/ul/li[${parameters}]/descendant::span[text()="Add to cart"]`;
            I.wait(1);
            I.retry({ retries: 20, minTimeout: 10 }).moveCursorTo(`//*[@id="center_column"]/ul/li[${parameters}]/descendant::img`);
            I.retry({ retries: 20, minTimeout: 10 }).click(XPATH_POSITIONADDTOCART_SPAN);
            I.retry({ retries: 20, minTimeout: 10 }).see('Product successfully added to your shopping cart');
            I.retry({ retries: 20, minTimeout: 10 }).click('Continue shopping');
        },
        checkoutDefault: function (parameters) {
            let quantidadeProdutos = parameters.positionsGridAddToCart.length; 

            I.click('Cart');
            I.see(`Your shopping cart contains: ${quantidadeProdutos} Products`);
            I.see('SHOPPING-CART SUMMARY', XPATH_CHECKOUTTITLE_H1);
            I.click(XPATH_PROCEEDTOCHECKOUT_BUTTON);
            I.see('ADDRESSES', XPATH_CHECKOUTTITLE_H1);
            I.click(XPATH_PROCEEDTOCHECKOUT_BUTTON);
            I.see('SHIPPING', XPATH_CHECKOUTTITLE_H1);
            I.checkOption('#cgv');
            I.click(XPATH_PROCEEDTOCHECKOUT_BUTTON);
            I.see('PLEASE CHOOSE YOUR PAYMENT METHOD', XPATH_CHECKOUTTITLE_H1);
            I.click('Pay by bank wire');
            I.see('ORDER SUMMARY', XPATH_CHECKOUTTITLE_H1);
            I.click('I confirm my order');
            I.see('ORDER CONFIRMATION', XPATH_CHECKOUTTITLE_H1);
            I.see('Your order on My Store is complete.');
        }
    })
}
