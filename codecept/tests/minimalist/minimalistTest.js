
Feature('@MINIMALIST');
/**

 */
Scenario('Filter and buy 3 grid products', async function (I, minimalist) {
    //enter at page
    I.amOnPage('http://www.getminimalist.com');
    I.retry({ retries: 20, minTimeout: 10 }).see("minimalist");
    // checkpoint page loaded
    // insert a new list withouth login
    I.click('Start a list');
    I.click('Add new list');
    // init function for add item -- add and validate record included
    I.wait(1);
    I.retry({ retries: 20, minTimeout: 10 }).fillField('#new-item', 'Ovos');
    I.retry({ retries: 20, minTimeout: 10 }).click('#submit-new-item');
    I.retry({ retries: 20, minTimeout: 10 }).see('Ovos', '//*[@id="item-list"]');
    // end function

    // init function for mark item of list and validate that item has marke that completed
    I.retry({ retries: 20, minTimeout: 10 }).click('//*[@id="item-list"]/descendant::label[text()="Ovos"]/ancestor::div/preceding-sibling::button');
    I.retry({ retries: 20, minTimeout: 10 }).seeElement('//*[@id="item-list"]/descendant::label[text()="Ovos"]/ancestor::div/preceding-sibling::button/ancestor::li[contains(@class, "clearfix todo completed")]');
    // end


});

AfterSuite(async function (I) {

});