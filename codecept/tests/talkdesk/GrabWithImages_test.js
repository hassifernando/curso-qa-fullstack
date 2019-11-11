
Feature('@HOME - @TALKDESK');

Scenario('test something', async function (I, talkdesk) {
    I.amOnPage('https://www.talkdesk.com/');
    I.scrollTo('//html/body/section[4]/div/div/div/div[1]/div[1]/h2');
    talkdesk.encontrarNomeEmpresaImagem();
    pause();

});
