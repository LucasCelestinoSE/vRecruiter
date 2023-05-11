import { Router } from 'express'
import { adminController } from '../controllers/adminController'
const express = require('express')

var bodyParser = require('body-parser')
 
var app = express()



const routes = Router()
routes.post('/create/company', adminController.createCompany )
routes.post('/login', adminController.login)

export default routes