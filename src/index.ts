import { Request,Response,NextFunction } from 'express';
import { AppDataSource } from './data-source'
import { routes } from './routes';
const cors = require('cors')
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')
AppDataSource.initialize().then(() => {

  const express = require('express')
  const app = express()
  app.use(express.json())
  app.use((req:Request,res:Response,next:NextFunction)=>{
    res.header("Acess-Control-Allow-Origin", "*")
    app.use(cors())
    next()
  });
  routes(app)

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
