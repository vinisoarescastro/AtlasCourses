import os

def pergunta_idade():
    idade = int(input('Qual sua idade? '))
    return idade

def classificar_idade(idade):

    if idade <= 12:
        print(f'Você é uma criança. Idade: {idade}.')
    elif 13 <= idade <= 18:
        print(f'Você é um adolescente. Idade: {idade}.')
    else:
        print(f'Você é um adulto. Idade: {idade}.')

def main():
    idade = pergunta_idade()
    os.system('cls')
    classificar_idade(idade)

if __name__ == '__main__':
    main()
