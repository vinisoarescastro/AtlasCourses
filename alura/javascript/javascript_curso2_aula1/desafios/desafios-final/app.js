function calcularIMC(peso, altura){
    let imc = peso / (altura * altura);

    console.log(imc.toFixed(2));
}

calcularIMC(98, 1.72);

console.log('---------------------------------------')


function valorFatorial(n){
    if (n < 1) {
        console.log(`Fatorial não é definido para números negativos.`);
    }
    
    let resultado = 1;
    let contador = n;

    while (contador > 1) {
        // resultado = resultado * contador;
        resultado *= contador;
        contador--;
    }

    console.log(resultado);
}

valorFatorial(2);
valorFatorial(5);
valorFatorial(8);
valorFatorial(12);

console.log('---------------------------------------')


function cotacaoDolar(dolar){
    let reais = dolar * 4.80

    console.log(`O valor em dolar USD ${dolar.toFixed(2)} convertendo para reais é R$ ${reais.toFixed(2)}.`)
}

cotacaoDolar(1);
cotacaoDolar(10.28);
cotacaoDolar(23.54);
cotacaoDolar(102.11);

console.log('---------------------------------------')


function calcularAreaEPerimetro(comprimento, largura){
    let area = comprimento * largura;
    let perimetro = 2 * (comprimento + largura);

    console.log(`Àrea: ${area.toFixed(2)}m² \nPerímetro: ${perimetro.toFixed(2)}m.`);
}

calcularAreaEPerimetro(5.35, 8.1);
calcularAreaEPerimetro(5.2, 6.5);

console.log('---------------------------------------')

function tabuada(numero){
    let i = 10; // contador

    while ( i >= 0 ){
        console.log(`${numero} x ${i} = ${numero * i}`);
        i--
    }
}

tabuada(2);
tabuada(5);
tabuada(6);