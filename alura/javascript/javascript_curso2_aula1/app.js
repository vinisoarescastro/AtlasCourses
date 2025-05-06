let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMsgInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMsgInicial()

function verificarChute() {

    let chute = document.querySelector('input').value;

    if ( chute == numeroSecreto ) {
        exibirTextoNaTela('h1', 'Acertou!!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' ;
        let msgTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}. :)`;

        exibirTextoNaTela('p', msgTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {

        if ( chute > numeroSecreto ) {
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }

        tentativas++
        limparCampo();
    }

    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtdElementosNaLista = listaDeNumerosSorteados.length;

    if ( qtdElementosNaLista == numeroLimite ){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMsgInicial();
    limparCampo();

    document.getElementById('reiniciar').setAttribute('disabled',true);
}