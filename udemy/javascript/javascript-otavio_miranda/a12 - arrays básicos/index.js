/*****************************************************
**    Nesse arquivo iremos aprender sobre arrays    **
*****************************************************/

/*****************************************************
**              Indexação de strings                ** 
*****************************************************/

//            01234567              // Posições das letras na string
const nome = 'Vinicius'
console.log(nome[2]);               // Nesse caso o console irá imprimir a letra 'n' que está na posição 2 da string
console.log(nome);                  // Nesse caso o console irá imprimir a string inteira



/*****************************************************
**               Indexação de Arrays                ** 
*****************************************************/

//               0       1        2          3              // Posições dos nomes no array
const alunos = ['Luiz', 'Maria', 'Gustavo', 'Vinicius'];
console.log(alunos[1]);                                     // Nesse caso o console irá imprimir o nome 'Maria' que está na posição 1 do array
console.log(alunos);                                        // Nesse caso o console irá imprimir o array inteiro



/*****************************************************
**               Alteração de Arrays                ** 
*****************************************************/

alunos[0] = 'Eduardo';              // Nesse caso o console irá alterar o nome 'Luiz' para 'Eduardo'
console.log(alunos);                // Nesse caso o console irá imprimir o array inteiro



/*****************************************************
**               Adição de Arrays                   **
*****************************************************/
console.log(`########## Adição de Arrays ##########`);
console.log(`### Adicionar novo elemento no Array ###`);
console.log(`Nomes presentes na array: ${alunos}`);                             // Nesse caso o console irá imprimir o array inteiro

let novoNome = alunos[4] = 'Luiza';                                             
// Nesse caso o console irá adicionar o nome 'Luiza' na posição 4 do array e armazenar na variável 'novoNome'

console.log(`Foi adicionado o nome "${novoNome}" na Array: ${alunos}.\n`);       
// Nesse caso o console vai informar que o novo nome foi adicionado na array

console.log(`### Adicionar elemento na primeira posição do Array ###`);
alunos.unshift('Marcos');                                                       
// Nesse caso o console irá adicionar o nome 'Marcos' na PRIMEIRA POSIÇÃO do array

let primeiraPosicaoNome = alunos[0];                                            
// Nesse caso o console irá armazenar o nome da primeira posição do array na variável 'primeiraPosicaoNome'

console.log(`Foi adicionado o nome "${primeiraPosicaoNome}" no inicio da Array: ${alunos}\n`);
// Nesse caso o console vai informar que o novo nome foi adicionado no inicio array

console.log(`### Adicionar elemento na última posição do Array ###`);
alunos.push('Marcia');                                                          
// Nesse caso o console irá adicionar o nome 'Marcia' na ÚLTIMA POSIÇÃO do array

let ultimaPosicaoNome = alunos[alunos.length - 1];                              
// Nesse caso o console irá armazenar o nome da última posição do array na variável 'ultimaPosicaoNome'

console.log(`Foi adicionado o nome "${ultimaPosicaoNome}" no final da Array: ${alunos}"\n`);
// Nesse caso o console vai informar que o novo nome foi adicionado no final array



/*****************************************************
**               Remoção de Arrays                  **
*****************************************************/
console.log(`########## Remoção de Arrays ##########`);                 
let removido = alunos.pop();                                                    // Nesse caso o console irá REMOVER O ÚLTIMO NOME do array e armazenar na variável 'removido'
                   //.shift();                                                  // Nesse caso o console irá REMOVER O PRIMEIRO NOME do array e armazenar na variável 'removido'
console.log(`Nomes presentes na array após remoção: ${alunos}`);                // Nesse caso o console irá imprimir o array inteiro
console.log(`O nome removido da última posição da array foi: ${removido}`);     // Nesse caso o console irá imprimir o nome removido



/*****************************************************
**               Undefined e Slice                  **
*****************************************************/

console.log(alunos[50]);            // Nesse caso o console irá imprimir 'undefined' pois não existe a posição 50 no array
console.log(alunos.slice(0, 3));    // Nesse caso o console irá imprimir os nomes da posição 0 até a posição 3 do array