const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    let produto = frm.inProduto.value;
    let preco = Number(frm.inPreco.value);
    
    let preco50PorCentoDesconto = preco / 2
    let promocao = preco * 2 + preco50PorCentoDesconto

    resp1.innerHTML = `${produto} - Promoção: Leve 3 por R$${promocao.toFixed(2)}`
    resp2.innerHTML = `O 3º produto custa apenas R$ ${preco50PorCentoDesconto.toFixed(2)}`

})