'use strict';
let I;

I = require('../../steps_file.js')();

const SEARCH_INPUT = ''



module.exports = function () {
    return actor({

        ///escrever as funções necessárias para essa page

        filtrarConteudo() {
            I.fillField('Search GitHub', 'nerd');
            I.pressKey('Enter');
        },

        async encontrarNomeEmpresaImagem() {

            var nomeEmpresa = new Array();
            let valueDiv = 2;

            I.amOnPage('https://www.talkdesk.com/');
            //descer até a parte da página onde está contido as imagens com o nome dos clientes
            I.waitForVisible('//html/body/section[4]/div/div/div/div[1]/div[1]/h2', 20);
            I.scrollTo('//html/body/section[4]/div/div/div/div[1]/div[1]/h2');

            while (valueDiv <= 12) {
                if (valueDiv == 7) {
                    valueDiv++;
                };
                nomeEmpresa.push(await I.grabAttributeFrom(`//html/body/section[4]/div/div/div/div[1]/div[${valueDiv}]/descendant::img`, 'alt'));
                valueDiv++;
            };
            I.amOnPage('https://www.talkdesk.com/customers/');
            I.waitForVisible('//html/body/section[4]/div/div/div', 20);
            I.scrollTo('//html/body/section[4]/div/div/div');

            nomeEmpresa.forEach((value, index) => {
                I.seeElement(`//img[@alt="${nomeEmpresa[index]}"]/ancestor::div[contains(@class, "logo__wrapper col-6 col-sm-4 col-md col-xl -gutter-bottom")]`)
            })
        }
    })
}
