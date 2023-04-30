import { Application, Request, Response } from 'express';

import User from './UserRoutes'
import AdminRoutes from './AdminRoutes'
import Login from './LoginRoutes'
import  Company  from './CompanyRoutes';
export const routes = (app: Application) => {

    app.use(User)
    app.use(AdminRoutes)
    app.use(Login)
    app.use(Company)
    app.get('/', (_req: Request, res: Response) => {
        res.status(200).send({ mensagem: 'Boas vindas à API' });
    })
}
