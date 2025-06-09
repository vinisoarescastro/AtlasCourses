const numeros = [0, 4, 7, 9, 12, 84, 23, 11, 17, 22, 44, 51];

function somarNumeros(numeros){

    let somaDosNumeros = 0;
    for (let i = 0; i < numeros.length; i++) {
        somaDosNumeros += numeros[i];
    }

    return somaDosNumeros;
}

console.log(`A média dos números na array é: ${somarNumeros(numeros)/numeros.length}`)