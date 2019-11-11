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

            let nomeEmpresa = new Array();
            nomeEmpresa.push(await I.grabAttributeFrom('//html/body/section[4]/div/div/div/div[1]/div[2]/div/img', 'alt'));
            nomeEmpresa.push(await I.grabAttributeFrom('//html/body/section[4]/div/div/div/div[1]/div[3]/div/img', 'alt'));
            nomeEmpresa.push(await I.grabAttributeFrom('//html/body/section[4]/div/div/div/div[1]/div[4]/div/img', 'alt'));
            nomeEmpresa.push(await I.grabAttributeFrom('//html/body/section[4]/div/div/div/div[1]/div[5]/div/img', 'alt'));
            nomeEmpresa.push(await I.grabAttributeFrom('//html/body/section[4]/div/div/div/div[1]/div[6]/div/img', 'alt'));

            console.log(nomeEmpresa[0]);

        }

    })
}