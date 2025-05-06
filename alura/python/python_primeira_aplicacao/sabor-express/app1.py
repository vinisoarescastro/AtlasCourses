import os

restaurantes = ['Sabor Caseiro', 'Comida Caseira', 'Paladar D+']

def exibir_mensagem_inicio_app():
    os.system('cls')
    print("************************************")
    print("**   APLICATIVO DE RESTAURANTES   **")
    print("************************************")
    
def exibir_menu():
     print("\nMenu:")
     print("1. Cadastrar restaurante")
     print("2. Listar restaurantes")
     print("3. Ativar restaurante")
     print("4. Remover restaurante")
     print("5. Sair")

def voltar_ao_menu():

    input("\nDigite qualquer tecla para voltar ao menu: ")
    main()

def exibir_subtitulo(texto):
    os.system('cls')
    print(texto)

def cadastrar_restaurante():
    
    exibir_subtitulo(">>> Cadastrar restaurantes")
    nome_restaurante = input("Digite o nome do restaurante: ")

    if nome_restaurante in restaurantes:
        print(f"O restaurante '{nome_restaurante}' já está cadastrado. ")
    elif nome_restaurante:
        restaurantes.append(nome_restaurante)
        print(f"O restaurante '{nome_restaurante}' foi CADASTRADO com sucesso.")
    else:
        print("O nome do restaurante não pode estar vazio.")

    voltar_ao_menu()

def listar_restaurantes():

    exibir_subtitulo(">>> Listar restaurantes")

    for restaurante in restaurantes:
        print(f"=> {restaurante}")

    voltar_ao_menu()

def escolher_opcao():

    opcao_escolhida = int(input("\nDigite a opção desejada: "))

    try: 

        if opcao_escolhida == 1:
            cadastrar_restaurante()
        elif opcao_escolhida == 2:
            listar_restaurantes()
        elif opcao_escolhida == 3:
            print("")
        elif opcao_escolhida == 4:
            print("")
        elif opcao_escolhida == 5:
            print("")
        else:
            opcao_invalida()
    
    except:
        opcao_invalida()

def main():
    exibir_mensagem_inicio_app()
    exibir_menu()
    escolher_opcao()

if __name__ == '__main__':
    main()