const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);

function buscarAluno(nomeProcurado){
    const resultado = todasAsTurmas.find(nome => nome === nomeProcurado);

    if (resultado) {
        console.log(`Aluno encontrado: ${resultado}.`)
    } else {
        console.log(`Aluno: ${nomeProcurado}, não encontrado.`)
    }
}

buscarAluno('João Silva');
buscarAluno('Ana Souza');
buscarAluno('Vinicius Soares');
