'use strict';
let I;

I = require('../../steps_file.js')();

const XPATH_CUSTOMERACCOUNT_SPAN = '//*[@id="header"]/descendant::a[contains(@title, "View my customer account")]/span'

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

            searchProduct: function (parameters) {
                I.fillField('#search_query_top', parameters.productName);
                I.click('Search');
            },

            addProductsToCart: function (parameters) {
                let XPATH_POSITIONADDTOCART_SPAN = `//*[@id="center_column"]/ul/li[${parameters.positionsGridAddToCart}]/descendant::span[text()="Add to cart"]`;
                I.wait(1);
                I.retry({ retries: 20, minTimeout: 10 }).moveCursorTo(`//*[@id="center_column"]/ul/li[${parameters.positionsGridAddToCart}]/descendant::img`);
                I.retry({ retries: 20, minTimeout: 10 }).click(XPATH_POSITIONADDTOCART_SPAN);
                I.retry({ retries: 20, minTimeout: 10 }).see('Product successfully added to your shopping cart');
                I.retry({ retries: 20, minTimeout: 10 }).click('Continue shopping');
            }
    })
}
