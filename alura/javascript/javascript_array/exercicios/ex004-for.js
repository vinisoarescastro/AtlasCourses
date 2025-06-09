const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mostrarIndicesElementos(numeros){
    for(let i = 0; i < numeros.length; i++){
        console.log(`índice ${i}: ${numeros[i]}`)
    }
}

mostrarIndicesElementos(numeros)