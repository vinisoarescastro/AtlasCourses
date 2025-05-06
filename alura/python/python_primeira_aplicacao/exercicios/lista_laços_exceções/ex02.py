numeros_impar = []

for i in range(1, 51):
    if i % 2 != 0:
        numeros_impar.append(i)

print(f'Números impares na lista: {numeros_impar}.')
print(f'A soma de todos os elementos da lista: {sum(numeros_impar)}')

