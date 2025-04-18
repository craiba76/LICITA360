import requests

def fetch_licitacoes():
    url = "https://www.comprasnet.gov.br"
    response = requests.get(url)
    if response.status_code == 200:
        print("Licitacoes acessadas com sucesso!")
    else:
        print(f"Falha ao acessar o site: {response.status_code}")

if __name__ == "__main__":
    fetch_licitacoes()
