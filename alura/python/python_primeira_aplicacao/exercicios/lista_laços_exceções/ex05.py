lista = [10, 20, 30, 'quarenta', 50, 60, 70, 80, 90, 100]

try:
    soma = 0
    for i in lista:
        soma += i
    print(soma)

except TypeError:
    print('A lista contém elementos que não são números.')

except Exception as e:
    print(f'Ocorreu um erro inesperado: {e}.')