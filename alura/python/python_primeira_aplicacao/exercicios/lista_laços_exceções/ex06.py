# Construa um código que calcule a média dos valores em uma lista.
# Utilize um bloco try-except para lidar com a divisão por zero, caso a lista esteja vazia.


lista = ['a']

try:

    print(f'A soma da lista é: {sum(lista)}.')
    print(f'A média de elementos da lista é: {sum(lista)/len(lista):.2f}')

except ZeroDivisionError:

    print(f'A Lista está vázia, não é possível cálcular a média.')

except Exception as e:

    print(f'Ocorreu um erro inesperado: {e}')