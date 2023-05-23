import { Request, Response, NextFunction, response } from 'express';
const jwt = require('jsonwebtoken')
import { jwtsecret } from '../config/configAuthAdmin';

interface AuthenticatedRequest extends Request {
  loggerUserA?: { Email: string, id?: number; };
  token?: string;
}

function auth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authToken = req.headers['authorization'];
  if (authToken != undefined) {
    const token = authToken
    jwt.verify(token, jwtsecret.secretJWTU, (err: any, data: any) => {
      
      if (err) {
        res.status(401);
        res.json({ err: "Token inválido" });
      } else {
        res.locals.myvalue = data
        next();
      }
    });
  } else {
    res.status(401);
    res.json({ err: 'Token inválido' });
  }
}

export default auth;
