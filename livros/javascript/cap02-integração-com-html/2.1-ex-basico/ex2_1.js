// cria referência ao form e ao elemento h3 (onde a resposta será exibida)
const frm = document.querySelector('form');
const resp = document.querySelector('h3');

// cria um ouvinte do evento, acionado quando o botão submit é clicado
frm.addEventListener('submit', (e) => {
    const nome = frm.inNome.value;
    resp.innerText = `Olá, ${nome}.`;
    e.preventDefault();
})