function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')){ // verificar se tem uma classe no elemento
        confirmarRemove(imagem, botao)
    } else {
        confirmarAdd(imagem, botao)
    }
}

function confirmarRemove(imagem, botao){
    let resposta = confirm('Você realmente deseja devolver o item?')
    if (resposta){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return')
        botao.textContent = 'Alugar'

        console.log(itensLocados())
    }
}

function confirmarAdd(imagem, botao){

    let resposta = confirm('Você realmente deseja alugar o item?')
    if (resposta){
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return')
        botao.textContent = 'Devolver'

        console.log(itensLocados())
    }
}

function itensLocados(){
    let itensLocados = document.querySelectorAll('.dashboard__item__img--rented')
    return itensLocados.length
}
