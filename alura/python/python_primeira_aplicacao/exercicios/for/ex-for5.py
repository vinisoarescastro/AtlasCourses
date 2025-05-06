nome = input('Digite seu nome: ')

contador = 0
for n in nome:
    if n != " ":        # retirar os espaços
        contador += 1

print(f'O seu nome "{nome}" tem {contador} caracteres.')