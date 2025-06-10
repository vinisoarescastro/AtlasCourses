const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function multiplicarPor3(numero){
    return numero * 3;

}

function executaOperacaoEmArray(array, operacao){
    for (let i = 0; i < array.length; i++) {
        console.log(operacao(array[i]));
    }
}

executaOperacaoEmArray(numeros, multiplicarPor3);