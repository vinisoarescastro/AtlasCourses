// cria referência ao form e aos elementos h3 e h4 (resposta)
const form = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
form = addEventListener("submit", (e) => {
    const titulo = form.inTitulo.value;             // obtém conteúdo do campo id="inTitulo"
    const duracao = Number(form.inDuracao.value);   // obtém conteúdo do campo id="inDuracao" e converte para número

    let horas = Math.floor(duracao / 60);           // arredonda para baixo o resultado
    let minutos = duracao % 60;                     // obtém o resto da divisão

    resp1.innerText = `Nome do Filme: ${titulo}`;   
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;

    e.preventDefault();                             // evita envio do form
})
