import { Request, Response, NextFunction} from 'express';
const jwt = require('jsonwebtoken')
import { jwtsecret } from '../config/configAuth';
import { userRepository } from '../repositories/userRepository';
interface AuthenticatedRequest extends Request {
  loggerUserA?: { Email: string, id?: number; };
  token?: string;
}

function  authPerfil(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authToken = req.headers['authorization'];

  if (authToken != undefined) {
    const token = authToken.split(' ')[1];
    jwt.verify(token, jwtsecret.secretJWTU, (err: any, data: any) => {
      if (err) {
        res.status(401);
        res.json({ err: "Token inválido" })} 
      else {
        const idParams = req.params.id
            if (idParams != data.id){
                res.sendStatus(401).json()}
            else{
            
            next()
        }
}})
  } else {
    res.status(401);
    res.json({ err: 'Token inválido' });
  }
}

export default authPerfil;
