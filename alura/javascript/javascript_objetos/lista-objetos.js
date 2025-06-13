const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999999999', '5562999999999'],
    endereco: [{
        rua: 'Martins',
        numero: '43',
        complemento: ''
    }]
}

estudante.endereco.push({
    rua: 'Aristoteles',
    numero: 'SN',
    complemento: 'Q63 L14'
});

// console.log(estudante.endereco);
// console.log(estudante.endereco[1]);

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento);

console.log(listaEnderecosComComplemento);