
import { Request, Response } from 'express'
import { companyRepository } from '../../repositories/companyRepository'
import { jwtsecret } from '../../config/configAuthCompany'
import sharp from 'sharp';
const axios = require('axios');
const jwt = require('jsonwebtoken') 

export async function createCompany(req: Request, res: Response){
    const {name} = req.body
    try {
            const newCompany = companyRepository.create({name: name})
            await companyRepository.save(newCompany)
            const token = jwt.sign({ newCompany }, jwtsecret.secretJWTU, { expiresIn: "10y" })
            newCompany.token = token
            const empresa = await companyRepository.save(newCompany)
            return res.status(200).json({empresa})
        } catch (error) {
            
            return res.status(400).json({error})
        }
    }
    