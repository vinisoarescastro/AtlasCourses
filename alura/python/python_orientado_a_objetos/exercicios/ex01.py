# Criando classe de música
class Musica:
    # Criando lista para armazenas músicas
    musicas = []

    # Estrutura para um modelo de criação das músicas
    def __init__(self, nome, artista, duracao):
        self.nome = nome 
        self.artista = artista 
        self.duracao = duracao
        Musica.musicas.append(self)

    # Função para retornar informações em texto no terminal
    def __str__(self):
        return f'{self.nome.ljust(20)} | {self.artista.ljust(20)} | {self.duracao} segundos. '
    
    # Função para listar músicas no terminal
    def listar_musicas():
        for musica in Musica.musicas:
            print(f'{musica}')

# Criando as músicas
musica1 = Musica('Imagine', 'John Lennon', '183')
musica2 = Musica('Bohemian Rhapsody', 'Queen', '354')
musica3 = Musica('Hotel California', 'Eagles', '390')
musica4 = Musica('Billie Jean', 'Michael Jackson', '293')
musica5 = Musica('Shape of You', 'Ed Sheeran', '233')

# Chamando a função para listar as músicas no terminal
Musica.listar_musicas()


