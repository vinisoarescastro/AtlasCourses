alert('Bem-vindo ao jogo do mundo secreto!');

let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() *  numeroMaximo + 1)
console.log(numeroSecreto)
let chute = 0;
let tentativas = 1;

// Enquanto chute não for igual numero secreto
while ( chute != numeroSecreto ) {
    
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}.`);

    // Se o chute for igual o número secreto
    if ( chute == numeroSecreto ) {
        
        break;

    } else {

        if ( chute > numeroSecreto ) {
            alert(`O número secreto é MENOR que ${chute}`);
        } else {
            alert(`O número secreto é MAIOR que ${chute}`);
        }

        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}.`) 
