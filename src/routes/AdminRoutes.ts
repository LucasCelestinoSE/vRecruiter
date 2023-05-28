import { Router } from 'express'
import { adminController } from '../controllers/adminController'
import { userController } from '../controllers'
import { companyController } from '../controllers/companyController'
import auth from '../midware/AuthAdmin'
import multer from 'multer'
import { multerConfig } from '../config/multer'
import { Request, Response, RouterOptions } from 'express';
import sharp from 'sharp';
const imgur = require('imgur')
const routes = Router()
routes.post('/criar/empresa',multer(multerConfig).single('file'),adminController.createCompany )
routes.get('/usuarios',auth, userController.listUser)
routes.post('/criar/vaga/:id/',auth, companyController.createJob)
routes.get('/empresas', companyController.listCompany)
routes.get('/admin/empresa/vaga/:id/',auth,adminController.renderJobs) // Listagem de vagas pertecentes a empresa
routes.get('/admin/vaga/:id/',auth,adminController.listJobByjobId) // listagem de vagas criadas pelo id da vaga
routes.get('/usario/vaga/empresa/:id/',auth, companyController.listPassUserInJob)

    


export default routes