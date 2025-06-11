let anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'Senhor dos Aneis',
    autor: 'Desconhecido',
    anoPublicacao: 2018,
    genero: 'Ficção Cientifica',
}

livro.idadePublicacao = anoAtual - livro.anoPublicacao; 

let mostrarDetalhes = `Livro: ${livro.titulo}.\nAutor: ${livro.autor}.\nAno de Publicação: ${livro.anoPublicacao}.\nGênero: ${livro.genero}.\nIdade da Publicação: ${livro.idadePublicacao}.`;

console.log(mostrarDetalhes);