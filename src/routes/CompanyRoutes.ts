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
    return res.render('exemple',{jsonFile: jsonFile})
})
export default routes