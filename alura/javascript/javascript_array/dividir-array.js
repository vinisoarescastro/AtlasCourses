const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2); // Divide a lista em duas partes
const sala2 = listaEstudantes.slice(listaEstudantes.length/2); // Pega a segunda metade da lista, só colocar o começo da lista

console.log(sala1);
console.log(sala2);