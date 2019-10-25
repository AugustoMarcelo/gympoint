# Gympoint

<p align="justify">
<strong>Gympoint</strong> é um sistema gerenciador de academias. Ele permite cadastrar usuários, alunos, planos e matrículas. Além disso, calcula os valores finais e a duração das matrículas, permite realização de check-in dos alunos, permite que os alunos possam abrir pedidos de auxílio e realiza envio de e-mails.
</p>

# Funcionalidades

A seguir, estarão listadas as funcionalidades já implementadas no projeto.

- Autenticação;
- Manutenção de Alunos;
- Manutenção de Matrículas;
  - *Envio de e-mail para o aluno*
- Manutenção de Planos;
- Manutenção de Pedidos de Auxílio
  - *Envio de e-mail para o aluno quando houver resposta*
- Realização de Check-ins;
  - *Limite de 5 checkins por semana*

# Instruções para o backend

Você precisará ter instalado na sua máquina o **Node.js**, o **Yarn** e o **Docker**. Feitas as configurações, seguem os passos para executar o backend da aplicação:

 - Executar o comando `yarn` para fazer o dowload de todas as dependências necessárias para executar o projeto;

 - Crie um container para executar o banco de dados:
    ```
    docker run --name gympoint-db -e POSTGRES_PASSWORD=gympoint -p 5432:5432 -d postgres
    ```
 - Execute as `migrations` para que as tabelas sejam criadas:
   ```
   yarn sequelize db:migrate
   ```

 - Se quiser, também pode gerar alguns dados, como usuário administrador e planos, executando os `seeds`:
   ```
   yarn sequelize db:seed:all
   ```
   *Com isso, você terá o email admin@gympoint.com e a senha 123456 para fazer autenticação e 3 planos cadastrados.*

 - Após isso, execute **yarn dev** para que o backend esteja funcionando.