FORMAT: A1

# Documentação do Gympoint
Abaixo, seguem as rotas disponíveis, que tipo de parâmetros podem ser utilizados para filtrar e o formato das respostas das requisições.

# Listagem de Alunos [GET /students]
+ Response `200` (application/json)

  + Parameters

    | Parameter | Description | Parameter Type     | Default Value  |
    |-----------|-------------|--------------------|---------------|
    | page      | Número da página a ser retornada | Query (*optional*) | 1 |
    | limit     | Quantidade de itens por requisição | Query (*optional*) | 10 |
    | q         | Nome do aluno a ser buscado | Query (*optional*) | - |
  
  + Body

    ```json
    {
      "count": 1,
      "rows": [
        {
          "id": 1,
          "name": "Marcelo Augusto",
          "email": "mrclgst10@gmail.com",
          "age": 25,
          "weight": 92.5,
          "height": 184,
          "registration": {
            "end_date": "2019-12-01"
          }
        },
      ]
    }
    ```
---

# Listagem de matrículas [GET /registrations]
+ Response `200` (application/json)

  + Parameters

    | Parameter | Description | Parameter Type     | Default Value  |
    |-----------|-------------|--------------------|---------------|
    | page      | Número da página a ser retornada | Query (*optional*) | 1 |
    | limit     | Quantidade de itens por requisição | Query (*optional*) | 10 |
  
  + Body

    ```json
    {
      "count": 1,
      "rows": [
        {
          "id": 2,
          "start_date": "2019-11-01",
          "end_date": "2019-12-01",
          "price": 129,
          "active": true,
          "student": {
            "id": 3,
            "name": "Marcelo Augusto",
            "email": "mrclgst10@gmail.com",
            "age": 25,
            "weight": 92.5,
            "height": 184
          },
          "plan": {
            "id": 2,
            "title": "Start",
            "duration": 1,
            "price": 129
          }
        }
      ]
    }
    ```
---

# Listagem de planos [GET /plans]
+ Response `200` (application/json)

  + Parameters

    | Parameter | Description | Parameter Type     | Default Value  |
    |-----------|-------------|--------------------|---------------|
    | page      | Número da página a ser retornada | Query (*optional*) | 1 |
    | limit     | Quantidade de itens por requisição | Query (*optional*) | 10 |
  
  + Body

    ```json
    {
      "count": 3,
      "rows": [
        {
          "id": 2,
          "title": "Start",
          "duration": 1,
          "price": 129,
          "createdAt": "2019-10-22T12:18:43.058Z",
          "updatedAt": "2019-10-22T12:18:43.058Z"
        },
        {
          "id": 3,
          "title": "Gold",
          "duration": 3,
          "price": 109,
          "createdAt": "2019-10-22T12:18:43.058Z",
          "updatedAt": "2019-10-22T12:18:43.058Z"
        },
        {
          "id": 4,
          "title": "Diamond",
          "duration": 6,
          "price": 89,
          "createdAt": "2019-10-22T12:18:43.058Z",
          "updatedAt": "2019-10-22T12:18:43.058Z"
        }
      ]
    }
    ```
---

# Listagem de checkins do aluno [GET /students/{:id}/checkins]
+ Response `200` (application/json)

  + Parameters

    | Parameter | Description | Parameter Type     | Default Value  |
    |-----------|-------------|--------------------|---------------|
    | page      | Número da página a ser retornada | Query (*optional*) | 1 |
    | limit     | Quantidade de itens por requisição | Query (*optional*) | 10 |
    | id        | ID do aluno | Path | - |
  
  + Body

    ```json
    {
      "count": 5,
      "rows": [
        {
          "id": 1,
          "student_id": 3,
          "createdAt": "2019-10-24T11:36:32.031Z",
          "updatedAt": "2019-10-24T11:36:32.031Z"
        },
        {
          "id": 2,
          "student_id": 3,
          "createdAt": "2019-10-24T11:36:43.650Z",
          "updatedAt": "2019-10-24T11:36:43.650Z"
        },
        {
          "id": 3,
          "student_id": 3,
          "createdAt": "2019-10-24T12:02:54.875Z",
          "updatedAt": "2019-10-24T12:02:54.875Z"
        },
        {
          "id": 4,
          "student_id": 3,
          "createdAt": "2019-10-24T12:02:57.214Z",
          "updatedAt": "2019-10-24T12:02:57.214Z"
        },
        {
          "id": 5,
          "student_id": 3,
          "createdAt": "2019-10-24T12:02:59.526Z",
          "updatedAt": "2019-10-24T12:02:59.526Z"
        }
      ]
    }
    ```