import os

def numero_par_ou_impar():
    numero_escolhido = int(input('Escolha um número inteiro: '))
    os.system('cls')

    if numero_escolhido % 2 == 0:
        print(f'O número que você escolheu({numero_escolhido}) é par.')
    else:
        print(f'O número que você escolheu({numero_escolhido}) é ímpar.')

def main():
    numero_par_ou_impar()

if __name__ == '__main__':
    main()
