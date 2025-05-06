const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {

    let valor15Minuto = Number(frm.inValorMin.value);
    let quantMinuto = Number(frm.inTempoUso.value);
    let quant15Min = (quantMinuto / 15);
    let valorPagar = Math.ceil(quant15Min) * valor15Minuto;

    resp.innerHTML = `Valor a Pagar R$: ${valorPagar.toFixed(2)}`;

    e.preventDefault();
})