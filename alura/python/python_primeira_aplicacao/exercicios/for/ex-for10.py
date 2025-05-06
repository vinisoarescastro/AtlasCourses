palavra = input('Digite uma palavra: ')
vogais = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']

contador_de_vogais = 0

for i in palavra:
    if i in vogais:
        contador_de_vogais += 1

print(f'A palavra que você digitou "{palavra}" tem {contador_de_vogais} vogais.')