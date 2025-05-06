palavras = ["gato", "cachorro", "arara", "onça", "golfinho"]
palavras_cinco_letras = [ ]

for i in palavras:
    if len(i) >= 5:
        palavras_cinco_letras.append(i)

print(10*"=")
print(f'\nLista com todas as palavras: {palavras}')
print(f'Lista com palavras com 5 ou mais letras: {palavras_cinco_letras}\n')
print(10*"=")

print('\nLista de palavras com menos de 5 letras:')
for i in palavras:
    if len(i) < 5:
        print(i)