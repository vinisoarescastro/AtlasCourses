// Seleciona o elemento <form> do HTML e armazena na constante 'frm'
const frm = document.querySelector("form");

// Seleciona o elemento <h3> do HTML para exibir a resposta e armazena na constante 'resp'
const resp = document.querySelector("h3");

// Adiciona um ouvinte de evento ao formulário que escuta o evento 'submit'
frm.addEventListener("submit", (e) => {
    // Converte o valor inserido no campo 'inQuilo' para um número e armazena na constante 'quilo'
    const quilo = Number(frm.inQuilo.value);

    // Converte o valor inserido no campo 'inConsumo' para um número e armazena na constante 'consumo'
    const consumo = Number(frm.inConsumo.value);

    // Calcula o valor a ser pago, convertendo quilos para gramas e multiplicando pelo consumo
    const valor = (quilo / 1000) * consumo;

    // Atualiza o texto do elemento <h3> com o valor a pagar, formatando com duas casas decimais
    resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`;

    // Impede o comportamento padrão do formulário, que seria recarregar a página
    e.preventDefault();
});
