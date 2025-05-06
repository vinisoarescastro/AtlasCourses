// const estudanteReprovou = (notaFinal, faltas) => {
//     if (notaFinal < 7 && faltas > 4 ) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const exibirNome = (nome) => nome ;

// console.log(estudanteReprovou(6,5));
// console.log(estudanteReprovou(10,2));

// console.log(exibirNome('Vinicius'));


// Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.

// const saudacao = (nome) => {
//     if ((typeof nome) == 'string') {
//         return `Olá, ${nome}. Seja bem-vindo.`;
//     } else {
//         return 'O valor "nome" não é uma string. Tente novamente!'
//     }
// }

// console.log(saudacao(10))

// Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.

// const maiorIdade = (idade) => (idade >= 18) ? 'Você é maior de Idade.' : 'Você é menor de Idade.';
// console.log(maiorIdade(15));

// Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

// const palindromo = (palavra) => {

//     const palavraInvertida = palavra.split('').reverse().join('');

//     if (palavra === palavraInvertida){
//         return 'Essa palavra é um palindromo';
//     } else {
//         return 'Não é um palindromo';
//     }
// }

// console.log(palindromo('ovo'));
// console.log(palindromo('casa'));

// Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.

// const maiorNumero = (n1, n2, n3) => {

//     if ( n1 > n2 && n1 > n3) {
//         return `O número ${n1} é maior que: ${n2} e ${n3}!`
//     } else if ( n2 > n1 && n2 > n3) {
//         return `O número ${n2} é maior que: ${n1} e ${n3}!`
//     } else if ( n3 > n1 && n3 > n2) {
//         return `O número ${n3} é maior que: ${n1} e ${n2}!`
//     } else {
//         return 'Dois ou mais números tem o mesmo valor.'
//     }
// }

// console.log(maiorNumero(10,15,2))

// Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.

const calcularPotencia = (base, expoente) => {
    return Math.pow(base, expoente);
}

console.log(calcularPotencia(5,2))