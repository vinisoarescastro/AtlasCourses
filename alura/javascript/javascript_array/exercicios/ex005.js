const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let resultado = receberArraySomarElementos(numeros)

function receberArraySomarElementos(numeros){

    somaDosNumeros = 0;
    for(let i = 0; i < numeros.length; i++){
        somaDosNumeros += numeros[i];
    }

    return somaDosNumeros;
}

console.log(`O resultado da soma é igual a: ${resultado}`);