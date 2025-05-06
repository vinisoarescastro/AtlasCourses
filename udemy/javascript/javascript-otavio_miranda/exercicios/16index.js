// Luiz Otávio Miranda tem 30 anos, pesa 84 kg.
// tem 1.8 de altura e seu IMC é de 25.925925925925924

const nome = 'Vinicius'
const sobrenome = 'Soares'
const idade = '24'
const peso = '96'
const alturaEmM = Number('1.72') 

let data = new Date();                      // Cria uma variável com o objeto Date, que cria um novo objeto com a data e hora atuais. 
let anoAtual = data.getFullYear();          // Pega o ano atual com base na data fornecida pelo objeto Date

let imc = peso / (alturaEmM * alturaEmM);   // Cálculo do IMC: com base no peso e altura fornecidos
let anoNascimento = anoAtual - idade;       // Cálculo do ano de nascimento: com base na idade fornecida      

console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento} tem ${idade} anos e pesa ${peso} kg.`);
console.log(`tem ${alturaEmM.toFixed(2)} metros de altura e seu imc é de ${imc.toFixed(2)}.`); 
// toFixed(2) limita o número de casas decimais a 2