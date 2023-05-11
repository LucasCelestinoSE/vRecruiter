import { Router } from 'express'
import { companyController } from '../controllers/companyController'




const routes = Router()
routes.post('/create/job/:idCompany/', companyController.createJob)

export default routes