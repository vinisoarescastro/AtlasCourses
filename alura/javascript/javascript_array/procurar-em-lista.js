const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibirNomeENota(aluno) {
    if (lista[0].includes(aluno)){
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = medias[indice];

        console.log(`O aluno/a ${aluno}, tem a média ${mediaAluno}.`)

    } else {
        console.log(`O/a estudante "${aluno}", não foi encontrado na base de dados.`)
    }
}

exibirNomeENota('Juliana');
exibirNomeENota('Vinicius');
