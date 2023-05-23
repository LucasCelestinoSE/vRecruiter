import { Request,Response } from 'express'
import { jobsRepository } from '../../repositories/jobsRepository'

export async function renderJobs(req:Request, res: Response) {
    try {
        const companyId = Number(req.params.id)
        const job = await jobsRepository.find({where:{company: companyId},select: ["id", "title", "description", "company"]})

        if (job == undefined){
            return res.status(400).json('A vaga não existe ou sua requisição foi feita de forma errada!')
        }
        
        return res.status(200).json(job)
    } catch (error) {
        console.log(error)
        return res.json('Internal server error!')
    }
}