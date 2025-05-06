// Operadores Aritméticos //

// + Adição / Concatenação
// - Subtração
// / Divisão
// * Multiplicação
// ** Potenciação
// % Resto da divisão
// ++ Incremento. ex: num++ (incrementa 1 ao valor de num)
// -- Decremento. ex: num-- (decrementa 1 ao valor de num)


// Ordem de precedência // 
// ()
// **
// * / %
// + -

const num1 = 10; 
const num2 = 5;
console.log(num1 + num2);        // adição. resultado: 15

const num3 = 10;
const num4 = '5';
console.log(num3 + num4);       // concatenação. resultado: 105

const num5 = 10;
const num6 = 5;
console.log(num5 - num6);       // subtração. resultado: 5

const num7 = 10;
const num8 = 5;
console.log(num7 / num8);       // divisão. resultado: 2

const num9 = 10;
const num10 = 5;
console.log(num9 * num10);      // multiplicação. resultado: 50

const num11 = 10;
const num12 = 5;
console.log(num11 ** num12);    // potenciação. resultado: 100000

const num13 = 10;
const num14 = 5;
console.log(num13 % num14);     // resto da divisão. resultado: 0

let num15 = 10;
let num16 = 5;
console.log(num15 + num16 * num15);             // precedência. resultado: 60
console.log((num15 + num16) * num15);           // precedência. resultado: 150
console.log(num15 + num16 * num15 / num16);     // precedência. resultado: 20
console.log(++num15);                           // incremento de 1. resultado: 11
console.log(--num16);                           // decremento. resultado: 4


let contador = 0;                           // incremento
contador += 2;                              // incremento de 2 em 2
console.log(contador);                      // resultado: 2



// NaN - Not a Number (não é um número)

let num17 = 10;
let num18 = 'Vinicius';
console.log(num17 * num18);                 // resultado: NaN
console.log(typeof num18);                  // resultado: string
console.log(typeof num17);                  // resultado: number