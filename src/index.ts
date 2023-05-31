import { Request,Response,NextFunction } from 'express';
import { AppDataSource } from './data-source'
import { routes } from './routes';
const fileUpload = require('express-fileupload')
const { getStorage, ref, uploadBytes } = require("firebase/storage");
const cors = require('cors')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')
import multer = require('multer');
AppDataSource.initialize().then(() => {

  const express = require('express')
  const app = express()
  // static
  app.set('view engine', 'ejs');
  app.use(express.static('public'));
  app.use(express.json())
  app.use(function(req:Request, res:Response, next:NextFunction) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });
  routes(app)
  app.use(cors())

  const server = app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`)
  })

  process.on('SIGINT', () => {
    server.close(() => {
      console.log('Servidor encerrado')
      process.exit(0)
    })
  })
})
