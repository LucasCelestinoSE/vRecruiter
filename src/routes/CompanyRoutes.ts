import { Router } from 'express'
import { companyController } from '../controllers/companyController'
import { userController } from '../controllers'
import auth from '../midware/AuthCompany'
const routes = Router()
 // Mostra todas as empresas
routes.get('/vagas', userController.listJobs) //
routes.post('/criar/contato', companyController.criarContato)
routes.get('/gerar-pdf', (req,res) => {
    const jsonFile = req.body
    const jsonExemplo = {
        "id": 1,
        "name": "lucas",
        "password": "$2a$08$JDOjwW3E0XlLuzSgRWGpwuFmaWMStADbQo47D/XYAw3CUneMFIyFi",
        "email": "lucas.celp12312@mail.com",
        "profile": {
            "id": 14,
            "genero": "masculino",
            "idade": "18",
            "telefone": "79 9 88851391",
            "cep": "49.400-000",
            "estado": "SERGIPE",
            "experiencias": [
                {
                    "fim": "data",
                    "cidade": "Lagarto",
                    "inicio": "Data",
                    "empresa": "Casas Bahia",
                    "descricao": "Testando",
                    "experiencia": "vendedor"
                }
            ],
            "formacoes": [
                {
                    "fim": "jun 27",
                    "local": "SE",
                    "inicio": "jan 22",
                    "formacao": "Sistemas de Informação",
                    "instituicao": "UFS"
                }
            ],
            "idiomas": [
                {
                    "nivel": "iniciante",
                    "idioma": "Ingles"
                }
            ],
            "habilidades": [
                "Fumar k9"
            ],
            "deficiencia": false
        }
    }
    return res.render('exemple',{jsonFile: jsonExemplo})
})
export default routes