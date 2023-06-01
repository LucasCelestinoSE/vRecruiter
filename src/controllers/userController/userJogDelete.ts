import { Request, Response } from "express"
import { UserJob } from "../../entities/UserJob";
import { userRepository } from "../../repositories/userRepository";
import { jobsRepository } from "../../repositories/jobsRepository";
import { userJobRepository } from "../../repositories/userJogRepository";


export async function userJobDelete(req: Request, res: Response) {
    const idJob = Number(req.params.idJob)
    const idUser =  Number(res.locals.myvalue.id)
    
    try {
        const deleteResult = await userJobRepository.delete({ userId: idUser, jobId: idJob });
        return res.status(200).json(deleteResult)
    } catch (error) {
        console.log(error)
        res.status(500).json('Internal server error!')
    }
}