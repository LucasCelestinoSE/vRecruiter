import { Router } from 'express'
import { companyController } from '../controllers/companyController'




const routes = Router()
routes.post('/create/job/:idCompany/', companyController.createJob)
routes.get('/company/job/:id/', companyController.renderJob) // Mostra toda uma vaga
export default routes