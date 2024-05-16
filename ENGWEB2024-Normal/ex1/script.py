import json

def substituir_virgula_por_ponto(file_path):
    # Abrir e carregar o ficheiro JSON
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    
    # Verificar e substituir a vírgula por ponto no campo precoContratual
    for item in data:
        if 'precoContratual' in item:
            preco = item['precoContratual']
            if isinstance(preco, str):
                item['precoContratual'] = preco.replace(',', '.')
    
    # Salvar os dados atualizados de volta no ficheiro JSON
    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=4)

    print("Substituição concluída.")

# Caminho para o ficheiro JSON
file_path = 'contratos2024.json'

# Chamar a função para substituir a vírgula por ponto
substituir_virgula_por_ponto(file_path)