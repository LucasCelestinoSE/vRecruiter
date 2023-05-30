import { Router } from 'express'
import { userController } from '../controllers'
import auth from "../midware/AuthMidleware"



const routes = Router()
routes.post('/registro', userController.createUser) 
routes.post('/login', userController.login)
routes.post('/registrar-em/vaga/:idJob/',auth, userController.userJobRegister)
routes.put('/fases-de/vaga/:idJob/', auth,userController.userJobPhases)
routes.get('/pessoa/perfil',auth, userController.userProfile)
routes.get('/empresa/:id/' , userController.listCompanyById )
routes.get('/vaga/:id/' , userController.listjobById )

export default routes
