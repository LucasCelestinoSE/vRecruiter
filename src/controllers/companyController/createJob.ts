
import { Request,Response } from 'express'
import { companyRepository } from '../../repositories/companyRepository'
import { jobsRepository } from '../../repositories/jobsRepository'
import { jwtsecret } from '../../config/configAuthCompany'
import { Job } from '../../entities/Job'
const jwt = require('jsonwebtoken')

export async function createJob(req: Request, res: Response){
    	const {title, description} = req.body
		const testes = req.body.teste
		const id = Number(req.params.id)
		const body = req.body.perguntas
		console.log(body)
		const {gabarito} = req.body
		try {
			const newJob = new Job
			newJob.title = title
			newJob.description = description
			newJob.company = id
			newJob.gabarito = gabarito
			newJob.perguntas = body
			await jobsRepository.save(newJob)

			return res.status(201).json('Vaga criada com sucesso!')
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
}