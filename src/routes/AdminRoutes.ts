import { Router } from 'express'
import { adminController } from '../controllers/adminController'
import { userController } from '../controllers'
import { companyController } from '../controllers/companyController'
import auth from '../midware/AuthAdmin'



const routes = Router()
routes.post('/criar/empresa',auth, adminController.createCompany )
routes.get('/usuarios',auth, userController.listUser)
routes.post('/criar/vaga/:id/',auth, companyController.createJob)
routes.get('/empresas', companyController.listCompany)
routes.get('/empresa/vaga/:id/',auth,adminController.renderJobs) // Listagem de vagas pertecentes a empresa
routes.get('/admin/vaga/:id/',auth,adminController.listJobByjobId) // listagem de vagas criadas pelo id da vaga
export default routes