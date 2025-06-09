const numeros = [0, 4, 12, 48, 74, 23, 84, 11, 100, 2, 9];

const resultado = maiorEMenorNumero(numeros);

function maiorEMenorNumero(numeros){

    maiorValor = numeros[0];
    menorValor = numeros[0];

    for(let i = 0; i < numeros.length; i++){
        if (numeros[i] < menorValor){
            menorValor = numeros[i]
        }

        if (numeros[i] > maiorValor){
            maiorValor = numeros[i]
        }
    }

    return [maiorValor, menorValor];
}

console.log(`o menor número é ${resultado[1]} e o maior número é ${resultado[0]}`);



