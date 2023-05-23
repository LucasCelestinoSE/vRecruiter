# vRecruiter

**Toda rota terá um middleware para validar o token**

*Dentro deste token, estará contido o Usuário e o ID*

## Rotas de Administrador

### POST /admin/login ()

*Nessa rota existirá futuramente uma autenticação em middleware, e o que será exibido em sua saida ainda será implementado no futuro*

*API EXEMPLO*

*Entrada*

**Corpo da Requisição no BODY (JSON):**

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
### Middleware de autenticação
*API EXEMPLO*
*Entrada*
**Corpo de requisição no Header = ['Autorization']**
*Saída quando há o token é válido e não valido, respectivamente*
```Json 
{"message": "login encontrado associado"}
```
```Json 
{"err": "token invalido!"}
```
### POST /criar/empresa (admin)
*Entrada:* ```http://ip/create/company```
**Requisão feita no body:**
*Saida:* 

```Json 
{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuZXdDb21wYW55Ijp7Im5hbWUiOiJjb3JpbnRoaWFucyBGQyIsImlkIjo1fSwiaWF0IjoxNjgzODEzMDczLCJleHAiOjE5OTkzODkwNzN9QbM8CiWlcZk010H5Gd_kttNy-f_UKS8lPcSklQk5.hAU"}
```
### GET /usuario -> (Admin)
*Essa rota retornará todos os usuários encontrados no banco.*
*Entrada:* ```http:/usuarios```
*Saida:* 

```Json 
{"usuarios": "[array de usuários]"}
```

### GET /empresas (ADMIN)

*Essa rota retornará toda as empresas que estão cadastradas na vRecruiter*
*Entrada:* ```http:/empresas```
*saida*
```Json 
{"empresas": "[array de empresas]"}
```
### GET /empresa/:EmpresaID/ (ADMIN)
*Essa rota retornará uma empresa especifica e suas informações pelo id dado nos parametros de rota, lembrando que o empresaID é meramente minemônimo somente na documentação, e no código está /id somente.*
**Requisão feita nos parametros de Rota (/empresa/:EmpresaID/):**
*Entrada:* ```http:/empresa/:EmpresaID/```
*saida*
```Json 
{"empresa": "empresa"}
```
### POST /criar/vaga/:id/ (ADMIN)
*Essa rota esperará do parametro de rota, um id referente a empresa*
**Requisão feita nos parametros de Rota (/empresa/vaga/:id/):**
**Requisão feita no body com as informações da vaga:  :**
*Entrada:* ```http:/criar/vaga/id```
*saida*
```Json 
{"message": "vaga criada com sucesso!"}
```
### GET /empresa/vaga/:idEmpresa/ (ADMIN)
*Essa rota esperará do parametro de rota, um id referente a empresa*
**Requisão feita nos parametros de Rota (/empresa/vaga/:id/):**
*Entrada:* ```http:/criar/vaga/id```
*saida*
```Json 
{"vagas": "['Array de vagas referente a empresa']"}
```
### GET /admin/vaga/:jobId/ (ADMIN)
*Essa rota esperará do parametro de rota, um jobId referente a vaga e retornará a vaga que corresponde a esse jobId (jobId minemônico (id))*
**Requisão feita nos parametros de Rota (/admin/vaga/:jobId/):**
*Entrada:* ```http:/criar/vaga/id```
*saida*
```Json 
{"vaga": "job"}
```
### GET /usario/vaga/empresa/:id/
*Essa rota esperará do parametro de rota, um id referente a vaga e retornará a vaga que corresponde a esse jobId*
