import os


'''
Essa lista com vários dicionários, é para realizar o armazenamento das informações dos restaurantes. 
'''
restaurantes = [
    {'nome': '1008', 'categoria': 'Brasileira', 'ativo': False},
    {'nome': 'Pastel & Cia', 'categoria': 'Fritos', 'ativo': True},
    {'nome': 'Labodeguita', 'categoria': 'Brasileira', 'ativo': False},
    {'nome': 'Sushi Express', 'categoria': 'Japonesa', 'ativo': True},
    {'nome': 'Churrasquinho do Zé', 'categoria': 'Churrasco', 'ativo': True},
    {'nome': 'La Bella Pizza', 'categoria': 'Pizzaria', 'ativo': False},
    {'nome': 'Cantina Italiana', 'categoria': 'Italiana', 'ativo': True},
    {'nome': 'Veggie Life', 'categoria': 'Vegetariana', 'ativo': True},
    {'nome': 'Hamburgueria Prime', 'categoria': 'Lanches', 'ativo': False},
    {'nome': 'Doce Encanto', 'categoria': 'Doces e Sobremesas', 'ativo': True}
]

def exibir_nome_do_programa():
    '''Essa função é para exibir o nome do programa.'''
    print("""
██████████████████████████████████████████████████████████████████████████
█─▄▄▄▄██▀▄─██▄─▄─▀█─▄▄─█▄─▄▄▀███▄─▄▄─█▄─▀─▄█▄─▄▄─█▄─▄▄▀█▄─▄▄─█─▄▄▄▄█─▄▄▄▄█
█▄▄▄▄─██─▀─███─▄─▀█─██─██─▄─▄████─▄█▀██▀─▀███─▄▄▄██─▄─▄██─▄█▀█▄▄▄▄─█▄▄▄▄─█
▀▄▄▄▄▄▀▄▄▀▄▄▀▄▄▄▄▀▀▄▄▄▄▀▄▄▀▄▄▀▀▀▄▄▄▄▄▀▄▄█▄▄▀▄▄▄▀▀▀▄▄▀▄▄▀▄▄▄▄▄▀▄▄▄▄▄▀▄▄▄▄▄▀
""")

def exibir_opcoes():
    '''Essa função é para exibir as informações do menu, para o usuário poder interagir posteriormente.'''
    print('1. Cadastrar restaurante')
    print('2. Listar restaurante')
    print('3. Alternar estado do restaurante')
    print('4. Sair\n')


def finalizar_app():
    '''Função para encerrar o programa'''
    exibir_subtitulo('Finalizando app...')


def exibir_subtitulo(texto):
    '''Função para exibir o subtitulo, quando o usuário seleciona alguma opção do menu principal.'''
    os.system('cls')
    linha = '*' * (len(texto) + 4)
    print(linha)
    print(texto.center(len(texto) + 4))
    print(linha)
    print()


def voltar_ao_menu_principal():
    '''Função para o usuário aperta qualquer tecla para voltar ao menu principal'''
    input('\nDigite uma tecla para voltar a menu: ')
    main()


def opcao_invalida():
    '''Função para monstrar que o usuário digitou uma opção inválida.'''
    print('Opção invalída!\n')
    voltar_ao_menu_principal()


def cadastrar_novo_restaurante():
    '''Função responsável para cadastrar um novo restaurante
    
    Inputs:
    - Nome do restaurante
    = Categoria

    OutputS:
    - Adiciona um novo restaurante a lista de restaurante
    '''
    exibir_subtitulo('Cadastrar novo restaurante')
    nome_do_restaurante = input('Digite o nome do resturante que deseja cadastrar: ')
    categoria = input(f'Digite o nome da categoria do restaurante: ')
    dados_do_rastaurante = {
        'nome':nome_do_restaurante,
        'categoria':categoria,
        'ativo':False
    }
    restaurantes.append(dados_do_rastaurante)
    print(f'O restaurante "{dados_do_rastaurante['nome']}" foi cadastrado com sucesso.')
    voltar_ao_menu_principal()


def listar_restaurantes():
    '''Função responsável para listar os restaurantes cadastrados'''
    exibir_subtitulo('Listando restaurantes')

    print(f'{'NOME DO RESTAURANTE'.ljust(20)} | {'CATEGORIA'.ljust(20)} | {'STATUS'}')
    for restaurante in restaurantes:
        nome_restaurante = restaurante['nome']
        categoria_restaurante = restaurante['categoria']
        ativo = 'Ativo' if restaurante['ativo'] else 'Inativo'
        print(f'{nome_restaurante.ljust(20)} | {categoria_restaurante.ljust(20)} | {ativo}')
    voltar_ao_menu_principal()


def alternar_estado_restaurante():
    '''Função prinicipal para alterar o estado do restaurante'''
    exibir_subtitulo('Alternando estado do restaurante')
    nome_restaurante = input('Digite o nome do restaurante que deseja alterar o estado: ')
    restaurante_encontrado = False
    for restaurante in restaurantes:
        if nome_restaurante == restaurante['nome']:
            restaurante_encontrado = True
            restaurante['ativo'] = not restaurante['ativo']
            mensagem = f'O restaurante "{nome_restaurante}" foi ativado com sucesso!' if restaurante['ativo'] else f'O restaurante "{nome_restaurante}" foi desativado com sucesso!'
            print(mensagem)
            break
    if not restaurante_encontrado:
        print(f'O restaurante {nome_restaurante} não foi encontrado!')
    voltar_ao_menu_principal()


def escolher_opcao():
    '''Função para o usuário escolher uma opção do menu.'''
    try: 
        opcao_escolhida = int(input('Escolha uma opção: '))
        if opcao_escolhida == 1:
            cadastrar_novo_restaurante()
        elif opcao_escolhida == 2:
            listar_restaurantes()
        elif opcao_escolhida == 3:
            alternar_estado_restaurante()
        elif opcao_escolhida == 4:
            finalizar_app()
        else:
            opcao_invalida()
    except:
        opcao_invalida()


def main():
    '''Função principal que faz o programa funcionar.'''
    os.system('cls')
    exibir_nome_do_programa()
    exibir_opcoes()
    escolher_opcao()


if __name__ == '__main__':
    main()