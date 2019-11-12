'use strict';
let I;

I = require('../../steps_file.js')();


module.exports = function () {
    return actor({

        ///escrever as funções necessárias para essa page
        /**
         * Função que realizará o teste completo
         */
        async encontrarNomeEmpresaImagem() {

            var nomeEmpresa = new Array();
            //o valueDiv inicia com o valor 2 pois a primeira imagem está nessa div
            let valueDiv = 2;
            //acessa homepage da talkdesk
            I.amOnPage('https://www.talkdesk.com/');
            //Aguardar até 20 segundos para a página carregar e descer até a seção com as imagens dos clientes
            I.waitForVisible('//html/body/section[4]/div/div/div/div[1]/div[1]/h2', 20);
            I.scrollTo('//html/body/section[4]/div/div/div/div[1]/div[1]/h2');
            //as divs vão de 2 a 12 sendo que a div 7 não contém nenhuma imagem de cliente
            while (valueDiv <= 12) {
                if (valueDiv == 7) {
                    valueDiv++;
                };
                //armazenar o valor do atributo alt no array nomeEmpresa, ao fim deverá ser um array com 10 posições
                nomeEmpresa.push(await I.grabAttributeFrom(`//html/body/section[4]/div/div/div/div[1]/div[${valueDiv}]/descendant::img`, 'alt'));
                valueDiv++;
            };
            //Acessar a página de clientes
            I.amOnPage('https://www.talkdesk.com/customers/');
            //Aguardar até 20 segundos para a página carregar e descer até a seção com as imagens dos clientes
            I.waitForVisible('//html/body/section[4]/div/div/div', 20);
            I.scrollTo('//html/body/section[4]/div/div/div');
            //será executado o comando que irá tentar visualizar os elementos do array nomeEmpresa
            nomeEmpresa.forEach((value, index) => {
                I.seeElement(`//img[@alt="${nomeEmpresa[index]}"]/ancestor::div[contains(@class, "logo__wrapper col-6 col-sm-4 col-md col-xl -gutter-bottom")]`)
            })
        }
    })
}
