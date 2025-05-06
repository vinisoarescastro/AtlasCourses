/* const nome01 = 'Luiz'
const sobrenome01 = 'Miranda'
const idade01 = 25;

const nome02 = 'Vinicius'
const sobrenome02 = 'Soares'
const idade02 = 55;

const pessoa03 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa03.nome)
console.log(pessoa03.sobrenome)
console.log(pessoa03.idade)
*/

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome, 
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25 )
const pessoa2 = criaPessoa('Vinicius', 'Castro', 24 )
const pessoa3 = criaPessoa('Renan', 'Souza', 23 )
const pessoa4 = criaPessoa('Marcos', 'Soares', 54 )
const pessoa5 = criaPessoa('Juan', 'Keff', 32 )
const pessoa6 = criaPessoa('Maria', 'Oliveira', 50 )

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome)