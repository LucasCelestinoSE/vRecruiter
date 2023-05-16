
import { Request,Response } from 'express'
import { companyRepository } from '../../repositories/companyRepository'
import { jobsRepository } from '../../repositories/jobsRepository'
import { jwtsecret } from '../../config/configAuthCompany'
import { Job } from '../../entities/Job'
const jwt = require('jsonwebtoken')
interface Pergunta {
	texto: string;
	alternativas: string[];
  }
export async function createJob(req: Request, res: Response){
    	const {title, description} = req.body
		const testes = req.body.teste
		const { idCompany } = req.params
		const feedback = req.body.feedback
		try {
			const company = await companyRepository.findOneBy({ id: Number(idCompany) })

			if (!company) {
				return res.status(404).json({ message: 'Empresa não existe' })
			}

			const newJob = new Job
			newJob.title = title
			newJob.description = description
			newJob.company = company
			newJob.jobTest = testes
			newJob.feedback = feedback
			await jobsRepository.save(newJob)

			return res.status(201).json(newJob)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
}