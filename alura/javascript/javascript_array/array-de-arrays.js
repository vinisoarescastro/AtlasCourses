const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias]; // duas listas dentro de uma lista

console.log(
    `A Aluna da posição 1 da lista é: ${lista[0][1]}.
     A Nota dessa aluna é: ${lista[1][1].toFixed(2)}.`
)