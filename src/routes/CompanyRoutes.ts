import { Router } from 'express'
import { companyController } from '../controllers/companyController'
import auth from '../midware/AuthAdmin'
import authPerfil from '../midware/AuthMidleware'
import AuthAdmin from '../midware/AuthAdmin'


const routes = Router()
 // Mostra todas as empresas
routes.get('/usario/vaga/empresa/:id/',AuthAdmin, companyController.listUserInJob)
export default routes