'use strict';
let I;

I = require('../../steps_file.js')();


module.exports = function () {
    return actor({


        startNewListWithouthLogin: function () {
            I.click('Start a list');
            I.click('Add new list');
        },

        addItemToOpenList: function (parameters) {
            I.retry({ retries: 20, minTimeout: 10 }).fillField('#new-item', `${parameters}`);
            I.retry({ retries: 20, minTimeout: 10 }).click('#submit-new-item');
            I.retry({ retries: 20, minTimeout: 10 }).see(`${parameters}`, '//*[@id="item-list"]');
        },

        markItemToOpenList: function (parameters) {
            I.retry({ retries: 20, minTimeout: 10 }).click(`//*[@id="item-list"]/descendant::label[text()="${parameters}"]/ancestor::div/preceding-sibling::button`);
            I.retry({ retries: 20, minTimeout: 10 }).seeElement(`//*[@id="item-list"]/descendant::label[text()="${parameters}"]/ancestor::div/preceding-sibling::button/ancestor::li[contains(@class, "clearfix todo completed")]`);
        }



    })
}
