import express ,{NextFunction, Request, Response } from 'express'
import { AppDataSource } from './data-source'
import { routes } from './routes/index';
import cors from 'cors'
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser');
AppDataSource.initialize().then(() => {
  const app = express()
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use((req: Request,res: Response,next: NextFunction) =>{
    res.header("Access-Control-Allow-Origin", "*")
    app.use(cors());
    next()
})
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
