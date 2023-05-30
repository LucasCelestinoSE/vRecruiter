
import { Request,Response } from 'express'
import { companyRepository } from '../../repositories/companyRepository'
import { jobsRepository } from '../../repositories/jobsRepository'
import { jwtsecret } from '../../config/configAuthCompany'
import { Job } from '../../entities/Job'
const jwt = require('jsonwebtoken')

export async function createJob(req: Request, res: Response){
    	const {title, description,dados,alternativas,gabarito} = req.body
		const id = Number(req.params.id)
		try {
			const company = await companyRepository.findOne({where:{
				id: id
			}})
			if(!company){
				return res.status(400).json("empresa não encontrada!")
			}
			const newJob = new Job
			newJob.title = title
			newJob.description = description
			newJob.company = company
			newJob.gabarito = gabarito
			newJob.dados = dados
			await jobsRepository.save(newJob)

			return res.status(201).json('Vaga Criada!')
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
}