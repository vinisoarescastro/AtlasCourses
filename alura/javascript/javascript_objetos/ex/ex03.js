let anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'Senhor dos Aneis',
    autor: 'Desconhecido',
    anoPublicacao: 2018,
    genero: 'Ficção Cientifica',
}

livro.idadePublicacao = anoAtual - livro.anoPublicacao;
livro.avaliacao = null;

console.log(livro);

function atribuirAvaliacao(avaliacao){
    if (livro.avaliacao === null) {
    livro.avaliacao = avaliacao;
    console.log(`A avaliação ${avaliacao}, foi atribuída com sucesso ao livro '${livro.titulo}'`);
    } else {
    console.log('O livro já possui uma avaliação.');
    }
}

atribuirAvaliacao(10);
atribuirAvaliacao(5);

console.log(livro);
