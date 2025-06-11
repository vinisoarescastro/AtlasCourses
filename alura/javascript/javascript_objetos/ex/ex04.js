let anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'Senhor dos Aneis',
    autor: 'Desconhecido',
    anoPublicacao: 2018,
    genero: 'Ficção Cientifica',
}

livro.idadePublicacao = anoAtual - livro.anoPublicacao;
livro.genero = 'Aventura';

console.log(livro);