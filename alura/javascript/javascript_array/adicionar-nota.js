const notas = [10,6,8]
console.log(notas)

notas.push(7)

const media = ( notas[0] + notas[1] + notas[2] + notas[3] ) / notas.length
console.log(`As notas são: ${notas}. Conjunto com ${notas.length} elementos. E a média entre elas é ${media}`)