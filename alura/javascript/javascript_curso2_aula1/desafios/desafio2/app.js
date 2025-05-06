function calcularIMC(altura, peso){
    let imc = peso / (altura * altura);
    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
}

function calcularFatorial(numero){
    if (numero < 0 ) {
        console.log(`O fatorial não é definido para números negativos.`);
    }

    let fatorial = 1;
    let i = 1;
    while (i <= numero){
        fatorial *= i;
        i++;
    }
    
    console.log(`O fatorial de ${numero} é igual a ${fatorial}`);
}

function converterUSDparaREAL(dolar){
    let valorRealPor1Dolar = 4.80;
    let valorConvertido = Number(dolar) * valorRealPor1Dolar;
    console.log(`O valor de USD ${dolar.toFixed(2)} na cotação atual, equivale à R$ ${valorConvertido.toFixed(2)}.`)
}

function calcularAreaEPerimetroRetangulo(comprimento, largura){
    let area = largura * comprimento;
    let perimetro = 2 * (largura + comprimento);
    console.log(`Retangulo: Área: ${area} | Perímetro: ${perimetro}`);
}

function calcularAreaEPerimetroCirculo(raio){
    let pi = 3.14;
    let area = pi * (raio * raio);
    let perimetro = 2 * pi * raio; 
    console.log(`Circulo: Àrea: ${area} | Perímetro: ${perimetro}`);
}

function tabuada(numero){
    let contador = 1;
    while (contador <= 10){
        console.log(`${contador} x ${numero} = ${contador * numero}`);
        contador++
    }
}


calcularIMC(1.73, 90);

calcularFatorial(2);

converterUSDparaREAL(120.12);
converterUSDparaREAL(5.34);
converterUSDparaREAL(1.20);

calcularAreaEPerimetroRetangulo(5.25, 6);
calcularAreaEPerimetroRetangulo(2.5, 5);

calcularAreaEPerimetroCirculo(4.25);
calcularAreaEPerimetroCirculo(11);

tabuada(9);
tabuada(7);
