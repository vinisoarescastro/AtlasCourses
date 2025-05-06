try:

    numero = int(input('Digite um número inteiro positivo: '))

    if numero < 0:
        print('O número digitado é negativo. Portanto, inválido.')
    else: 

        for i in range(1, 11):
            print(f'{i} X {numero} = { numero * i}')

except ValueError:

    print('Valor digitado inválido.')