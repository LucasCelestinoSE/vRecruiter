import { Router } from 'express'
import { userController } from '../controllers'
import auth from "../midware/AuthMidleware"
const bodyParser = require('body-parser');


const routes = Router()
routes.get('/people',auth, userController.listUser) // admin auth
routes.post('/create/register', userController.createUser) 
routes.get('/people/profile/',auth, userController.listUserById) // userAuth
routes.post('/register-in/job/:idJob',auth, userController.userJobRegister) //userAuth
routes.put('/stages-on/job/:idJob', auth,userController.userJobPhases) // userAuth
// implementar mais tarde routes.put('/User/:id', )
// Idem routes.delete('/User/:id', )
export default routes
