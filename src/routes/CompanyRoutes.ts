import { Router } from 'express'
import { companyController } from '../controllers/companyController'




const routes = Router()
routes.post('/create/vaga/:idCompany', companyController.createCompany )


export default routes