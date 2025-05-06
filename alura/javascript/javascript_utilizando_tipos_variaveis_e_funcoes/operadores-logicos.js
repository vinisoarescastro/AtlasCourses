// const notaFinal = 6; 
// const faltas = 5;

// if (notaFinal < 7 && faltas > 4) {
//     console.log('reprovado. boas festas!')
// } else {
//     console.log('não foi reprovado por falta')
// }


// Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.

// let saldo = 1000.00;
// let deposito = 547.78;
// let saque = 812.10;

// console.log(`Saldo atual: R$ ${saldo.toFixed(2)}.`)
// console.log(`Deposito realizado: R$ ${deposito.toFixed(2)}.`)
// console.log(`Saldo atual: R$ ${(saldo + deposito).toFixed(2)}.`)
// console.log(`Saque realizado: R$ ${saque.toFixed(2)}.`)

// let operacao = saldo + deposito - saque;

// console.log(`Saldo atual: R$ ${operacao.toFixed(2)}.`)


// Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.

// let valor = 100;
// let numeroPar = ( valor % 2 ) === 0 ? true : false ;

// if (numeroPar === true) {
//     console.log('O número que você informou é PAR.');
// } else {
//     console.log('O número que você informou é IMPAR.');
// }


// Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

// let usuarioAdministrador = false;
// let usuarioLogado = false;

// if (usuarioAdministrador && usuarioLogado) {
//     console.log('Usuário logado e administrador: OK!!!');

// } else if (!usuarioAdministrador && usuarioLogado) {
//     console.log('Você não é o usuário administrador!');

// } else if (usuarioAdministrador && !usuarioLogado) {
//     console.log('Usuário administrador não logado no sistema.');

// } else {
//     console.log('USUARIO ADMINISTRADOR: NO && USUARIO LOGADO: NO.');
// }


// Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.

// let candidatoAQualificado = false;
// let candidatoBQualificado = false;

// if (candidatoAQualificado || candidatoBQualificado) {
//     console.log('Um dos candidatos é qualificado.');
// } else {
//     console.log('Nenhum dos candidatos é qualificado.')
// }


// Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.

let idadeMin = 16;
let idadeUsuario = 15;

if (idadeUsuario >= idadeMin){
    console.log('Você pode realizar a compra.');
} else {
    console.log('Infelizmente, não pode realizar a compra.');
}