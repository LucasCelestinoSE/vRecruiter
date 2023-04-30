import { Router } from 'express'
import { adminController } from '../controllers/adminController'



const routes = Router()
routes.post('/create/company', adminController.createCompany )


export default routes