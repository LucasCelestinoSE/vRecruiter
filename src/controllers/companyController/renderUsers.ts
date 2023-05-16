import { Request,Response } from 'express'
import { jobsRepository } from '../../repositories/jobsRepository'
import { Job } from '../../entities/Job'

export async function renderJob(req:Request, res: Response) {
    try {
        const id = Number(req.params.id)
        const job = await jobsRepository.findOne({where:{id: id}})
        console.log(job)
        if (job == undefined){
            return res.status(400).json('A vaga não existe ou sua requisição foi feita de forma errada!')
        }
        return res.status(200).json({perguntas: job?.jobTest})
    } catch (error) {
        return res.json('Internal server error!')
    }
}