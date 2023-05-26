import { Application, Request,Response } from 'express';

import User from './UserRoutes'
import AdminRoutes from './AdminRoutes'
import  Company  from './CompanyRoutes';

export const routes = (app: Application) => {
    app.use(User)
    app.use(AdminRoutes)
    app.use(Company)
    app.get('/', (req: Request, res: Response) => {
        res.status(200).send({ mensagem: 'Boas vindas à API' });
    })
   
   
}
