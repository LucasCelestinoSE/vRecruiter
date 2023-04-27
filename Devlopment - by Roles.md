##Toda rota tera um middleware para saber se o token é valido >> 
*Dentro deste token, estará contido o Usuário, Id,senha e seu cargoId*





## Tabela Tipo Usuário >>>
*Existirá uma classe chamada usuário, que será a entidade ou tabela de usuários do sistema.*
* Essa tabela existirá para identificar o tipo de usuário cadastrado no sistema: {empresa, funcionário ...} *
* Para cada tipo de usuário cadastrado, existira uma tabela de cargos que estará relacionada com os usuários. *
* E para cada cargo, existirá uma tabela que todas as permissões de cada cargo * 
 
## Registro de Usuário - Pessoa Física >> 
* O registro de pessoa física será feito pela rota de User/Create, nela será obtida as informações e um pull default dentro do banco, com usuário
do tipo PessoaF ( Acrônimo para pessoa física ) *

## Registro de Empresa - >> 
* O registro de empresas será feito de forma JWT secret, o administrador entrará em contato com a empresa e negociará suas dores, logo após, criará um token com
todas as informações da empresa, e passará esse token para que o cliente possa ter acesso aos métodos do cargo empresa.*

## Registro de admin. 
* Toda pessoa que possuir um cargo com direito de admin, terá permissões de pode entrar em todas as rotas...*
