
import { Request, Response } from 'express'
import { skillTestRepository } from '../../repositories/skillTestRepository'
import { jwtsecret } from '../../config/configAuthCompany'
const jwt = require('jsonwebtoken')

export async function createTest(req: Request, res: Response){
    
    try {
            const newCompany = skillTestRepository.create(req.body)
            await skillTestRepository.save(newCompany)
            
           
            res.json(jwt.sign({ newCompany }, jwtsecret.secretJWTU, { expiresIn: "10y" }))
        } catch (error) {
            
            return res.status(400).json({ message: error })
        }
    }
    