const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach(function(numero){
    console.log(numero * 3);
})

let indice = numeros.findIndex(numero => numero === 18);
console.log(`O índice do número 18, no array original é: ${indice}`);