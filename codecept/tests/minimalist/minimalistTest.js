
Feature('@MINIMALIST');
/**

 */
Scenario('Add new list, add itens and marke that completed', async function (I, minimalist) {
    //enter at page
    I.amOnPage('http://www.getminimalist.com');
    I.retry({ retries: 20, minTimeout: 10 }).see("minimalist");
    // checkpoint page loaded
    // insert a new list withouth login   
    minimalist.startNewListWithouthLogin();
    I.wait(1);
    // insert itens for object array item.addItem
    list.addItem.forEach((value, index) => {
        minimalist.addItemToOpenList(list.addItem[index]);
    });
    // mark itens for object array item.markItem
    list.markItem.forEach((value, index) => {
        minimalist.markItemToOpenList(list.markItem[index]);
    });
    //validate menu list
    let qtPendingItens = ` (` + (list.addItem.length - list.markItem.length) + `)`;
    let listName = (await I.grabAttributeFrom(`//*[@id="stats"]/h2`, 'title'));
    let listNameQtPendingItens = listName + qtPendingItens;
    I.see(listNameQtPendingItens, '//*[@id="my-lists"]');




});

AfterSuite(async function (I) {

});

var list = {
    addItem: ['Eggs', 'Banana', 'Sour Sprinkles', 'Cottage Cheese'],
    markItem: ['Banana', 'Sour Sprinkles']
}