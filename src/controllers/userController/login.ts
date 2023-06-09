import { Request, Response } from 'express'
import { userRepository } from '../../repositories/userRepository'
const bcrypt = require('bcryptjs');
import { jwtsecret } from '../../config/configAuth'
const jwt = require('jsonwebtoken') 

export async function login(req: Request, res: Response){
    const authlogin_valida = await userRepository.findOneBy({
        email: req.body.email
    })
    if (authlogin_valida) {
        const validasenha = await bcrypt.compare(req.body.password, authlogin_valida.password);
        if (validasenha) {
            return res.status(200).json({message: "Login encontrado Associado", token: jwt.sign
            ({ email: req.body.email, id: authlogin_valida.id },
                 jwtsecret.secretJWTU, { expiresIn: "48h" }),
                 email:authlogin_valida.email, name: authlogin_valida.name 
                
                })
        } else {
            return res.status(401).json({ message: "Acesso Negado" })
        }
    } else {
        return res.status(401).json({ message: "Acesso Negado" })
    }
    }