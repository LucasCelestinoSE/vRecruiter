import { Request, Response } from "express"
import { UserJob } from "../../entities/UserJob";
import { userRepository } from "../../repositories/userRepository";
import { jobsRepository } from "../../repositories/jobsRepository";
import { userJobRepository } from "../../repositories/userJogRepository";
export async function userJobRegister(req: Request, res: Response) {
    const idJob = Number(req.params.idJob)
    const idUser = Number(res.locals.myvalue.id)
    try {
        const job = await jobsRepository.findOne({where:{id: idJob}})
        if (!job){
            return res.status(404).json('Vaga não encontrada!')
        }
        const user = await userRepository.findOne({where:{id: idUser}})
        if (!user){
            return res.status(404).json('Para se cadastrar precisa está logado!')
        }

        const userRegis = await userJobRepository.findOne({where:{
            userId: idUser,
            jobId: Number(idJob)
        }})
        if(userRegis){
            return res.status(400).json('Você já está cadastrado nessa vaga!')
        }
        console.log({job: job}, {user: user}, {userRegis: userRegis})
        const userJob = new UserJob();
        userJob.userId = idUser; 
        userJob.jobId = Number(idJob);
        userJob.stage = 0
        await userJobRepository.save(userJob)
    } catch (error) {
        console.log(error)
        res.status(500).json('Internal server error!')
    }
}