# Teste Engenharia Web

## Setup da base de dados e Execução do Docker

Comecei por tratar do dataset.
Converti-o de um .csv para um .json. Este posteriormente precisou de sofrer alterações, uma vez que para converter para double, foi preciso substituir a vírgula por um ponto no atributo 'precoContratual', optando assim por mantê-lo em String.
Depois, copiei o dataset para o Docker, criei a coleção e base de dados com o mongoDB no Docker ambas com o nome de "contratos", seguindo em ordem os seguintes comandos.

-     sudo docker run -d -p 27017:27017 --name contratos mongo 

-     docker cp contratos2024.json contratos:/tmp

-     docker exec contratos mongoimport -d contratos -c contratos /tmp/contratos2024.json --jsonArray

Assim, execuntando o comando "mongosh", testei a base de dados com uma simples query: db.alunos.find().

Após isto, dentro da pasta em questão, basta abrir o terminal e instalar as dependências com o comando:

-     sudo npm i

E finalmente correr com o:

-     npm start

