class Carro:
    carros = []

    def __init__(self, modelo, cor, ano):
        self.modelo = modelo
        self.cor = cor 
        self.ano = ano
        Carro.carros.append(self) 

    def listar_carros():
        for carro in Carro.carros:
            print(f'{carro}')

    def __str__(self):
        return f'{self.modelo.ljust(12)} | {self.cor.ljust(12)} | {self.ano}'

voyage = Carro('VW Voyage', 'Prata', '2018')
civic = Carro('Honda Civic', 'Preto', '2020')
ford_ka = Carro('Ford Ka', 'Branco', '2017')

Carro.listar_carros()


# -----------------------------------------------------------------------------------

class Restaurante:
    def __init__(self, nome, categoria, capacidade, nota_avaliacao, ativo=False):
        self.nome = nome
        self.categoria = categoria
        self.ativo = ativo
        self.capacidade = capacidade
        self.nota_avaliacao = nota_avaliacao
    
    def __str__(self):
        status = 'Ativo' if self.ativo else 'Inativo'
        return (f'Restaurante: {self.nome}\n'
                f'Categoria:   {self.categoria}\n'
                f'Capacidade:  {self.capacidade} pessoas \n'
                f'Avaliação:   {self.nota_avaliacao}\n'
                f'Status:      {status}')

restaurante1 = Restaurante('Sabor Express', 'Brasileira', 80, 4.15)

print(restaurante1)


# -----------------------------------------------------------------------------------


class Cliente:
    def __init__(self, nome, idade, cidade, uf, pais='Brasil'):
        self.nome = nome
        self.idade = idade
        self.cidade = cidade
        self.uf = uf
        self.pais = pais

    def __str__(self):
        return (f'{self.nome.ljust(15)} | {str(self.idade).ljust(5)} | {self.cidade.ljust(15)} | {self.uf} | {self.pais}')

cliente1 = Cliente('João Silva', 30, 'São Paulo', 'SP')
cliente2 = Cliente('Maria Souza', 25, 'Rio de Janeiro', 'RJ')
cliente3 = Cliente('Carlos Lima', 40, 'Belo Horizonte', 'MG')

print(cliente1)
print(cliente2)
print(cliente3)
        