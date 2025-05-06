# 1 - Crie um dicionário representando informações sobre uma pessoa, como nome, idade e cidade.
informacoes_pessoas = [
    {
        'nome': 'Vinicius',
        'sobrenome': 'Soares',
        'idade': 30,
        'cidade': 'Goiânia',
        'uf': 'GO'
    },

    {
        'nome': 'Lucas',
        'sobrenome': 'Gabriel',
        'idade': 29,
        'cidade': 'Curitiba',
        'uf': 'PR'
    },

    {
        'nome': 'Josias',
        'sobrenome': 'Júnior',
        'idade': 26,
        'cidade': 'Florianópolis',
        'uf': 'SC'
    }
]


# 2 - Utilizando o dicionário criado no item 1:

# a. Modifique o valor de um dos itens no dicionário (por exemplo, atualize a idade da pessoa);
# b. Adicione um campo de profissão para essa pessoa;
# c. Remova um item do dicionário.
print(informacoes_pessoas[0]['idade'])
informacoes_pessoas[0]['idade'] = 24
print(informacoes_pessoas[0]['idade'])

print(informacoes_pessoas[0])
informacoes_pessoas[0].update({'Profissão':'Estudante'})
print(informacoes_pessoas[0])

print(informacoes_pessoas[1])
del informacoes_pessoas[1]['cidade']
print(informacoes_pessoas[1])

# 3 - Crie um dicionário utilizando para representar números e seus quadrados de 1 a 5.
numero_quadrados = {num: num**2 for num in range(1, 6)}
print(numero_quadrados)


# 4 - Crie um dicionário e verifique se uma chave específica existe dentro desse dicionário. 
chave = 'idade'

if chave in informacoes_pessoas[0]:
    print('A chave existe no dicionário.')
else:
    print('A chave não existe no dicionário.')


# 5 - Escreva um código que conte a frequência de cada palavra em uma frase utilizando um dicionário.
frase = 'Python é ótimo Python é muito popular'
palavras = frase.lower().split()
frequencia = {}

for palavra in palavras:
    if palavra in frequencia:
        frequencia[palavra] += 1
    else:
        frequencia[palavra] = 1
        
print(frequencia)