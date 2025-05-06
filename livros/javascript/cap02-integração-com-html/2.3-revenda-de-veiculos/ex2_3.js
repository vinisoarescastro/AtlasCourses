// cria referência ao frm e aos elementos de resposta (pelo id)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

// cria um "ouvinte" de evento, acionado quando o botao submit é clicado
frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value         // obtém o valor do campo inVeiculo
    const preco = Number(frm.inPreco.value)     // obtém o valor do campo inPreco e converte para número

    const entrada = preco * 0.50                // calcula a entrada (50% do preço)
    const parcela = ( preco * 0.50 ) / 12       // calcula o valor de cada parcela (50% do preço dividido por 12)

    resp1.innerText = `Promoção: ${veiculo}.`                   // exibe a resposta 
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}.`   // exibe a resposta
    resp3.innerText = `+12x de R$: ${parcela.toFixed(2)}.`      // exibe a resposta

    e.preventDefault()      // evita que o form seja enviado
})