const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

frm.addEventListener('submit', (e) => {

    let medicamento = frm.inMedicamento.value;
    let preco = Number(frm.inPreco.value);
    let precoTotal = preco * 2;
    let precoPromocao = Math.floor(precoTotal);

    resp1.innerHTML = `Promoção de ${medicamento}`;
    resp2.innerHTML = `Leve 2 por apenas R$:${precoPromocao.toFixed(2)}`;

    e.preventDefault();

})