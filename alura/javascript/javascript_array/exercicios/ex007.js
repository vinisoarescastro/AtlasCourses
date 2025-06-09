const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
const numerosPares = [];

for(let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 == 0) {
        numerosPares.push(numeros[i]);
    }
}

for(let i = 0; i < numerosPares.length; i++){

    for(let j = 0;  j < numerosPares.length - 1; j++)

        if (numerosPares[j] > numerosPares[j+1]){

            let temporario = numerosPares[j];
            numerosPares[j] = numerosPares[j+1]
            numerosPares[j+1] = temporario;
        }
}

console.log(numerosPares)