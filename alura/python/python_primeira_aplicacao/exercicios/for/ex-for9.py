palavra = input('Digite uma palavra: ')
palavra_invertida = ''.join(reversed(palavra))

for i in palavra_invertida:
    print(i, end='')

