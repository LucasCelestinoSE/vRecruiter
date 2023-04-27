import { Router } from 'express'
import { userController } from '../controllers'
import auth from "../midware/AuthMidleware"
import authPerfil from '../midware/AuthPerfil'

const routes = Router()
routes.get('/pessoas',auth, userController.listUser)
routes.post('pessoas/registro', userController.createUser )
routes.get('/pessoa/perfil/:id',authPerfil, userController.listUserById )
// implementar mais tarde routes.put('/User/:id', )
// Idem routes.delete('/User/:id', )
export default routes
