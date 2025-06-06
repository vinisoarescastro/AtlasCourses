const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']; // array, lista de estudantes

console.log(listaEstudantes); 
// Exibe a lista original

listaEstudantes.splice(1, 2, 'Rodrigo'); 
// Remove Ana e Caio, e adiciona Rodrigo no lugar deles
// slice (1, 2) remove 2 elementos a partir do índice 1 e adiciona Rodrigo no índice 1

console.log(listaEstudantes);
// Exibe a lista atualizada