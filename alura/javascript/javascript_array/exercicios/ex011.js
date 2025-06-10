const numeros = [1, 3, 4, 8, 7, 79, 11, 24, 29, 5, 91];

function verificarNumero(numero ,array){

    let indice = array.indexOf(numero)

    if (indice == -1) {
        console.log(`O número ${numero}, NÃO está presente no Array.`);
    } else {
        console.log(`O número ${numero}, ESTÁ PRESENTE no Array, no índice: ${indice}.`)
    }
}

verificarNumero(999, numeros);