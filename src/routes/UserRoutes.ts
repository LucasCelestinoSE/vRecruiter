import { Router } from 'express'
import { userController } from '../controllers'
import auth from "../midware/AuthMidleware"
import authPerfil from '../midware/AuthPerfil'
const bodyParser = require('body-parser');


const routes = Router()
routes.get('/people',auth, userController.listUser)
routes.post('/create/register', userController.createUser)
routes.get('/people/profile/:id',authPerfil, userController.listUserById)
routes.post('/register-in/job/:idJob',auth, userController.userJobRegister)
routes.put('/stages-on/job/:idJob', auth,userController.userJobPhases)
// implementar mais tarde routes.put('/User/:id', )
// Idem routes.delete('/User/:id', )
export default routes
