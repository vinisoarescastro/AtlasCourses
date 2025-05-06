function saudacao() {
    console.log('Olá, Mundo!')
}

function saudacaoNome(nome) {
    console.log(`Olá, ${nome}!`)
}

function dobroNumero(numero) {
    console.log(`O dobro de ${numero}, é igual a: ${numero * 2}.`)
}

function media(n1, n2, n3){
    let media = (n1 + n2 + n3) / 3;
    console.log(`A média dos números somados, é: ${media.toFixed(2)}.`);
}

function maiorNumero(n1, n2) {
    let numeroMaior = n1 > n2 ? n1 : n2;
    console.log(`O maior número é: ${numeroMaior}.`)
}

function numeroMultiplicadoPorEleMesmo(n) {
    console.log(`O número ${n}, multiplicado por ele mesmo. O resultado é: ${n*n}`)
}

saudacao()
saudacaoNome('Vinicius')
dobroNumero(45)
media(2,8,16)
maiorNumero(512, 1000)
numeroMultiplicadoPorEleMesmo(10)
