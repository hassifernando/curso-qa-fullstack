
Feature('@HOME - @TALKDESK');
/**
 * Objetivo do cenário: entrar na homepage, olhar as 10 imagens de clientes e validar
 * que as imagens estão aparecendo na página do cliente
 */
Scenario('Validar clientes da homepage na página de clientes', async function (I, talkdesk) {
    await talkdesk.encontrarNomeEmpresaImagem();
});

