function soma (x, y) {
    x = Number(x);
    y = Number(y);

    if (isNaN(x) || isNaN(y)){
        return 'Por favor, insira somente números.'
    }
    
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma(1, 2));
console.log(soma(3, 7));
console.log(soma('Vinicius', ' Soares'))