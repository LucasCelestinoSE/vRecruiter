import { Router } from 'express'
import { UserController } from '../controllers/UserController'
import auth from "../midware/AuthMidleware"


const routes = Router()
routes.get('/User', new UserController().listUser)
routes.get('/User/:id', new UserController().listUserById)
routes.post('/User', new UserController().createUser)
routes.put('/User/:id', new UserController().update)
routes.delete('/User/:id', new UserController().delete)
export default routes
