#Toda rota tera um middleware para saber se o token é valido# 
*Dentro deste token, estará contido o Usuário e Id*

#Rotas de adminstrador#
##routes.post('/admin', adminController.login)##
*Nessa rota existirá futuramente uma autenticação em middleware, e o que será exibida em seu output ainda será implementado no futuro*

'Interface = {
    username: string
    password: string
}'

##routes.post('/create/company', adminController.createCompany )##
#*Essa rota só pode ser acessada pelo adminstrador, nela você terá a permissão de criar empresas, da criação de uma empresa é gerado um token, token esse que será responsável pelo login de uma empresa*#

*API REFERENCE EXEMPLO*
>Dados enviados no body =>
'Interface = {
    nome: string
}'
*Abertura de rota*
*Entrada:* 'http://ip/create/company'
*Saida:* 
'Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuZXdDb21wYW55Ijp7Im5hbWUiOiJjb3JpbnRoaWFucyBGQyIsImlkIjo1fSwiaWF0IjoxNjgzODEzMDczLCJleHAiOjE5OTkzODkwNzN9.QbM8CiWlcZk010H5Gd_kttNy-f_UKS8lPcSklQk5hAU'

#Rotas de Empresas#

##routes.post('/create/job/',authCompany, companyController.createJob)##
*Nessa rota, a empresa irá criar uma vaga referente a ela.*

*API REFERENCE EXEMPLO*
> Dados do body
'Interface = {
    title: string,
    description: string
}'
>Dados do header>
'headers['authorization']'
>Abertura da Rota>
http://create/job/
