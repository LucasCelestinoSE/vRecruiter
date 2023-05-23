import { Request,Response } from 'express'
import { jobsRepository } from '../../repositories/jobsRepository'

export async function listJobByjobId(req:Request, res: Response) {
    try {
        const jobId = Number(req.params.id)
        const job = await jobsRepository.findOne({where:{id: jobId}})

        if (job == undefined){
            return res.status(400).json('A vaga não existe ou sua requisição foi feita de forma errada!')
        }
        
        return res.status(200).json({vaga:job})
    } catch (error) {
        console.log(error)
        return res.json('Internal server error!')
    }
}