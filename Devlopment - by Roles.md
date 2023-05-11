# vRecruiter

**Toda rota terá um middleware para validar o token**

*Dentro deste token, estará contido o Usuário e o ID*

## Rotas de Administrador

### POST /admin/login

*Nessa rota existirá futuramente uma autenticação em middleware, e o que será exibido em seu output ainda será implementado no futuro*

**Corpo da Requisição (JSON):**

```json
{
  "username": "string",
  "password": "string"
}```

## Testando