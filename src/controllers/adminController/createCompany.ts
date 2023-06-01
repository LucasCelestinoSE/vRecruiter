
import { Request, Response } from 'express'
import { companyRepository } from '../../repositories/companyRepository'
import { jwtsecret } from '../../config/configAuthCompany'
import sharp from 'sharp';
const axios = require('axios');
const jwt = require('jsonwebtoken') 

export async function createCompany(req: Request, res: Response){
    const info = req.body
    try {
            const newCompany = companyRepository.create(info)
            await companyRepository.save(newCompany)
            return res.status(200).json(info)
        } catch (error) {
            
            return res.status(400).json({error})
        }
    }
    