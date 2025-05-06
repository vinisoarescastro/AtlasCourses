// parâmetros/argumentos
// retorno


function exibeNomeEstudante(nome, nota){
    return `Seu nome é ${nome} e a sua nota é: ${nota.toFixed(2)}`;
}

console.log(exibeNomeEstudante('Caroline', 10));
console.log(exibeNomeEstudante('Ana', 8.3));