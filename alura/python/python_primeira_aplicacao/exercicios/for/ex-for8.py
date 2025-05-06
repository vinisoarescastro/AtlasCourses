numero = input('Digite um número inteiro: ')
soma = 0

try:

    for n in range(1, int(numero) + 1):
        soma = soma + n

    print(f'O resultado da soma de números é: {soma}')

except ValueError:
    print('Erro, o número digitado não é inteiro.')