# ES UFG https://sigaa.sistemas.ufg.br/sigaa/public/curso/alunos.jsf?lc=pt_BR&id=69673271
# MED UFG https://sigaa.sistemas.ufg.br/sigaa/public/curso/alunos.jsf?lc=pt_BR&id=69678367

import requests
from bs4 import BeautifulSoup
import chardet

# URL do site que contém a lista de alunos ativos
url = "https://sigaa.sistemas.ufg.br/sigaa/public/curso/alunos.jsf?lc=pt_BR&id=69673278"

# Faz a requisição HTTP para obter o conteúdo da página
response = requests.get(url)

# Verifica se a requisição foi bem-sucedida
if response.status_code == 200:
    # Detecta a codificação do conteúdo da resposta
    encoding = chardet.detect(response.content)['encoding']
    
    # Decodifica o conteúdo da resposta usando a codificação detectada
    content = response.content.decode(encoding)
    
    # Faz o parsing do conteúdo HTML
    soup = BeautifulSoup(content, 'html.parser')

    # Encontra o nome do curso
    nome_curso_tag = soup.find('span', class_='nome_curso').find('a')
    nome_curso = nome_curso_tag.text.strip() if nome_curso_tag else 'Nome do Curso Não Encontrado'

    # Encontra todas as linhas da tabela que contém as matrículas e nomes dos alunos
    rows = soup.find_all('tr')

    # Título da lista
    print("=" * 55)
    print(f"ALUNOS ATIVOS - {nome_curso}")
    print("=" * 55)

    # Extrai e imprime a matrícula e o nome dos alunos
    for row in rows:
        matricula = row.find('td', class_='colMatricula')
        nome = row.find('td', class_=None)
        
        if matricula and nome:
            print(f"Matrícula: {matricula.text.strip()}; Nome: {nome.text.strip()}")

    print("=" * 55)
    print("=" * 55)
else:
    print(f"Erro ao acessar o site: {response.status_code}")
