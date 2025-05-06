let numero = Number(prompt('Digite um número: '));          // 1º - Solicita um número ao usuário e armazena na variável numero 
let numeroPrincipal = document.getElementById('numero-principal');
let texto = document.getElementById('texto');

numeroPrincipal.innerHTML = numero;

texto.innerHTML = `Seu número menos (-) 2 é igual a: ${numero - 2}.<br>`;  // texto.innerHTML faz com que o texto seja impresso na tela
texto.innerHTML = `Seu número mais (+) 2 é igual a: ${numero + 2}.<br>`;   // texto.innerHTML faz com que o texto seja impresso na tela

/*
document.body.innerHTML = `<strong>Seu número é: ${numero}</strong> <br>`;             // 2º - Imprime o número na tela
document.body.innerHTML += `Raiz quadrada: ${numero ** 0.5}. <br>`;                    // 3º - Imprime a raiz quadrada do número 
document.body.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)}. <br>`;   // 4º - Imprime se o número é inteiro ou não 
document.body.innerHTML += `É NaN: ${Number.isNaN(numero)}. <br>`;                     // 5º - Imprime se o número é NaN ou não 
document.body.innerHTML += `Arredondando pra cima: ${Math.ceil(numero)}. <br>`;        // 6º - Imprime o número arredondado pra cima
document.body.innerHTML += `Arredondando pra baixo: ${Math.floor(numero)}. <br>`;      // 7º - Imprime o número arredondado pra baixo
document.body.innerHTML += `O Nº com duas casas decimais: ${numero.toFixed(2)}. <br>`; // 8º - Imprime o número com duas casas decimais
*/