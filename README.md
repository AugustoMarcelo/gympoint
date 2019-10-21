# Gympoint

# Como executar os projetos

 - Primeiro, certifique-se de ter instalado o **Node.js** na sua máquina;
 - Em seguida, execute o comando `yarn` para fazer o dowload de todas as dependências necessárias para executar o projeto;
 - Após isso, execute `yarn dev` para que o backend esteja funcionando;
 - Crie um container, usando docker, para executar o banco de dados:
    ```
    docker run --name gympoint-db -e POSTGRES_PASSWORD=gympoint -p 5432:5432 -d postgres
    ```