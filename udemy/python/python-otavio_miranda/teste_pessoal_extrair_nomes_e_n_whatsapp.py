from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Caminho para o driver do navegador (ajuste conforme necessário)
chrome_driver_path = "C:\Program Files\Google\Chrome\Application\chrome.exe"

# Inicializa o navegador
driver = webdriver.Chrome(executable_path=chrome_driver_path)

# Abre o WhatsApp Web
driver.get('https://web.whatsapp.com')

# Tempo para escanear o QR code (ajuste conforme necessário)
print("Escaneie o QR code com o seu WhatsApp")
time.sleep(15)

# Navega para o grupo específico (substitua 'Nome do Grupo' pelo nome real do grupo)
group_name = "Nome do Grupo"
search_box = driver.find_element(By.XPATH, '//div[@contenteditable="true"][@data-tab="3"]')
search_box.click()
search_box.send_keys(group_name)
search_box.send_keys(Keys.ENTER)

# Espera o grupo carregar
time.sleep(5)

# Abre a lista de participantes
driver.find_element(By.XPATH, '//span[@data-testid="menu"]').click()
time.sleep(1)
driver.find_element(By.XPATH, '//div[contains(text(),"Dados do grupo")]').click()

# Espera a lista de participantes carregar
time.sleep(5)

# Extrai os nomes e números de telefone dos participantes
participants = driver.find_elements(By.XPATH, '//div[@data-testid="cell-frame-container"]')

for participant in participants:
    try:
        name = participant.find_element(By.XPATH, './/span[@dir="auto"]').text
        number = participant.find_element(By.XPATH, './/span[@class="_ccCW FqYAR i0jNr"]').text
        print(f"Nome: {name}, Número: {number}")
    except Exception as e:
        print("Erro ao extrair dados do participante:", e)

# Fecha o navegador
driver.quit()
