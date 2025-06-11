let anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'Senhor dos Aneis',
    autor: 'Desconhecido',
    anoPublicacao: 2018,
    genero: 'Ficção Cientifica',
    avaliacao: null
}

livro.idadePublicacao = anoAtual - livro.anoPublicacao;

console.log(livro);

delete livro.avaliacao;

console.log(livro);