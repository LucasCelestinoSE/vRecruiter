
import { Request, Response } from 'express'
import { companyRepository } from '../../repositories/companyRepository'
import { jobsRepository } from '../../repositories/jobsRepository'
import { jwtsecret } from '../../config/configAuthCompany'
const jwt = require('jsonwebtoken')

export async function createCompany(req: Request, res: Response){
    const { title, description } = req.body
		const { idCompany } = req.params

		try {
			const company = await companyRepository.findOneBy({ id: Number(idCompany) })

			if (!company) {
				return res.status(404).json({ message: 'Aula não existe' })
			}

			const newJob = jobsRepository.create({
				title,
				description,
				company,
			})

			await jobsRepository.save(newJob)

			return res.status(201).json(newJob)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
}