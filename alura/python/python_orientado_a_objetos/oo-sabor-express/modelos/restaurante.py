class Restaurante:
    restaurantes = []

    def __init__(self, nome, categoria):
        self.nome = nome
        self.categoria = categoria
        self._ativo = False
        Restaurante.restaurantes.append(self)

    def __str__(self):
        return f'{self.nome} | {self.categoria}'

    def listar_restaurante():
        print(f'{'-'*21}|{'-'*22}|{'-'*10}')
        print(f'{'Nome do Restaurante'.ljust(20)} | {'Categoria'.ljust(20)} | {'Status'}')
        print(f'{'-'*21}|{'-'*22}|{'-'*10}')
        for restaurante in Restaurante.restaurantes:
            print(f'{restaurante.nome.ljust(20)} | {restaurante.categoria.ljust(20)} | {restaurante.ativo}')

    @property
    def ativo(self):
        return 'Ativo' if self._ativo else 'Inativo'

restaurante_praca = Restaurante('Praça', 'Gourmet')
restaurante_pizza = Restaurante('Pizza Express', 'Italiana')

restaurantes = [restaurante_praca, restaurante_pizza]

Restaurante.listar_restaurante()
