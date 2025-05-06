let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function btnConsole() {
    console.log('O botão foi clicado!');
}

function btnAlert() {
    alert('Eu amo JS <3');
}

function btnPrompt() {
    let nomeCidade = prompt('Digite o nome de uma cidade no Brasil: ');
    alert(`Estive em ${nomeCidade} e lembrei de você.`);
}

function btnSoma() {
    let n1 = Number(prompt('Digite um número:'));
    let n2 = Number(prompt('Digite outro número:'));
    let resultadoSoma = n1 + n2

    alert(`A soma entre ${n1} + ${n2}, é igual a: ${resultadoSoma}.`);
}