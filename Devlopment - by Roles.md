# vRecruiter

**Toda rota terá um middleware para validar o token**

*Dentro deste token, estará contido o Usuário e o ID*

## Rotas de Administrador

### POST /admin/login

*Nessa rota existirá futuramente uma autenticação em middleware, e o que será exibido em sua saida ainda será implementado no futuro*

*API EXEMPLO*

*Entrada*

**Corpo da Requisição (JSON):**

```json
{
  "username": "string",
  "password": "string"
}
```
* SAIDA *

```json
{
  "token": "A*SF*ASFHASHFASHFYASYFYAGSF"
}
```

### POST /create/company
*Entrada:* 'http://ip/create/company'
*Saida:* 

```Json 
{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuZXdDb21wYW55Ijp7Im5hbWUiOiJjb3JpbnRoaWFucyBGQyIsImlkIjo1fSwiaWF0IjoxNjgzODEzMDczLCJleHAiOjE5OTkzODkwNzN9QbM8CiWlcZk010H5Gd_kttNy-f_UKS8lPcSklQk5.hAU"}
```

## Rotas de Empresas

### POST /create/job

*Nessa rota, a empresa irá criar uma vaga referente a ela.*

*API EXEMPLO*
* Entrada *
**Corpo da Requisição (JSON):**

```json
{
  "title": "string",
  "description": "string"
}
```
* SAIDA *
```json
{
  "messagem": "Vaga criada com sucesso!"
}
```