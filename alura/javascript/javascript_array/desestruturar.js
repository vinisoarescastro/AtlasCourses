const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno){
    if (lista[0].includes(aluno)) {

        const [alunos, medias] = lista; 
        const indice = alunos.indexOf(aluno);
        const notaAluno = medias[indice];

        console.log(`O aluno(a): '${aluno}' tem a média atual igual a: ${notaAluno}.`);

    } else {
        console.log(`Não foi encontrado o aluno: ${aluno}, na nossa base de registro.`);
    }
}

exibeNomeENota('Juliana');
exibeNomeENota('Vinicius');