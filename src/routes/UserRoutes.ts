import { Router } from 'express'
import { userController } from '../controllers'
import auth from "../midware/AuthMidleware"



const routes = Router()
routes.post('/registro', userController.createUser) 
routes.post('/login', userController.login)
routes.post('/registrar-em/vaga/:idJob/',auth, userController.userJobRegister) //userAuth
routes.put('/fases-de/vaga/:idJob/', auth,userController.userJobPhases)
routes.post('/pessoa/perfil',auth, userController.userProfile)
routes.get('/pessoa/perfil',auth, userController.profileData)
routes.put('/pessoa/perfil',auth, userController.attProfile)
routes.get('/empresa/:id/' , userController.listCompanyById )
routes.get('/vaga/:id/' , userController.listjobById ) // userAuth // userAuth
// implementar mais tarde routes.put('/User/:id', )
// Idem routes.delete('/User/:id', )
export default routes
