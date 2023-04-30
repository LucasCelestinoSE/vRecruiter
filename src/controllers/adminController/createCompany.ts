
import { Request, Response } from 'express'
import { companyRepository } from '../../repositories/companyRepository'
import { jwtsecret } from '../../config/configAuthCompany'
const jwt = require('jsonwebtoken')

export async function createCompany(req: Request, res: Response){
    const {name} = req.body
    try {
            const newCompany = companyRepository.create({name: name})
            await companyRepository.save(newCompany)
            
           
            res.json(jwt.sign({ newCompany }, jwtsecret.secretJWTU, { expiresIn: "10y" }))
        } catch (error) {
            
            return res.status(400).json({ message: error })
        }
    }
    