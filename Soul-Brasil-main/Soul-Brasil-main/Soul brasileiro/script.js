document.addEventListener('DOMContentLoaded', function () {
    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentarFonte = document.getElementById('aumentar-fonte');
    const diminuirFonte = document.getElementById('diminuir-fonte');

    // Alterna exibição do menu de acessibilidade
    botaoAcessibilidade.addEventListener('click', function () {
        opcoesAcessibilidade.classList.toggle('apresenta-lista');
    });

    // Controle de tamanho da fonte
    let tamanhoFonte = 1; // em rem
    const maxFonte = 1.5;
    const minFonte = 0.7;

    aumentarFonte.addEventListener('click', function () {
        if (tamanhoFonte < maxFonte) {
            tamanhoFonte += 0.1;
            document.body.style.fontSize = `${tamanhoFonte}rem`;
        }
    });

    diminuirFonte.addEventListener('click', function () {
        if (tamanhoFonte > minFonte) {
            tamanhoFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoFonte}rem`;
        }
    });
});