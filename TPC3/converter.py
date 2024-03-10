import json
import re

def read_json_file(file_path):
    bd = []
    try:
        with open(file_path, 'r') as json_file:
            bd = [json.loads(line) for line in json_file]
    except FileNotFoundError:
        print(f"The file '{file_path}' could not be found")
    except Exception as e:
        print(f'An error occurred: {e}')
    return bd

def calc_atores(db):
    atores = {}
    counter = 1
    for reg in db:
        if "cast" in reg:
            for ator in reg["cast"]:
                ator = ator.strip()
                if ator not in atores and re.match(r'[A-Z].*', ator):
                    atores[ator] = f"a{counter}"
                    counter += 1
    return atores

def calc_generos(db):
    generos = {}
    counter = 1
    for reg in db:
        if "genres" in reg:
            for genero in reg["genres"]:
                genero = genero.strip()
                if genero not in generos:
                    generos[genero] = f"g{counter}"
                    counter += 1
    return generos

file_path = "filmes.json"
myBD = read_json_file(file_path)
atores = calc_atores(myBD)
generos = calc_generos(myBD)

for film in myBD:
    film["film_id"] = film["_id"]["$oid"]
    del film["_id"]
    film["cast_ids"] = [atores[ator.strip()] for ator in film.get("cast", []) if ator.strip() in atores]
    film["genres_ids"] = [generos[genero.strip()] for genero in film.get("genres", []) if genero.strip() in generos]

novaDB = {
    "films": myBD,
    "actors": [{"id": id, "name": name} for name, id in atores.items()],
    "genres": [{"id": id, "type": type} for type, id in generos.items()]
}

with open("filmesDB.json", "w") as file:
    json.dump(novaDB, file, indent=4)
