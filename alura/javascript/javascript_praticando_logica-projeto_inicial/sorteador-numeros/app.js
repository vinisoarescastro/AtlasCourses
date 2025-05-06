function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let deNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);

    if (isNaN(quantidade) || isNaN(deNumero) || isNaN(ateNumero)){
        alert('Você esqueceu de preencher algum campo. Verifique e tente novamente!');
        return;
    }

    let qtdNumerosDisponiveis = ateNumero - deNumero + 1;

    if (qtdNumerosDisponiveis <= quantidade) {
        alert('A quantidade de números disponíveis é menor que a quantidade a ser sorteada!');
        return;
    } 

    let sorteados = [];

    for (let i = 0; i < quantidade; i++){
        let numero = obterNumeroAleatorio(deNumero, ateNumero);

        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(deNumero, ateNumero);
        }

        sorteados.push(numero);
    }

    mostrarResultado(sorteados);
    alterarStatusBotãoReiniciar()
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mostrarResultado(numerosSorteados){
    let paragrafo = document.querySelector('#resultado>label');
    paragrafo.innerHTML = `Números sorteados: ${numerosSorteados}`
}

function alterarStatusBotãoReiniciar(){
    let btnReiniciar = document.getElementById('btn-reiniciar');

    if (btnReiniciar.classList.contains('container__botao-desabilitado')){
        btnReiniciar.classList.remove('container__botao-desabilitado');
        btnReiniciar.classList.add('container__botao');
    } else {
        btnReiniciar.classList.remove('container__botao');
        btnReiniciar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    let paragrafo = document.querySelector('#resultado>label');
    paragrafo.innerHTML = `Números sorteados:  nenhum até agora`;
    
    alterarStatusBotãoReiniciar();
}
