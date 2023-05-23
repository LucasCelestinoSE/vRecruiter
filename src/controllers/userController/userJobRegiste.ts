import { Request, Response } from "express"
import { UserJob } from "../../entities/UserJob";
import { userRepository } from "../../repositories/userRepository";
import { jobsRepository } from "../../repositories/jobsRepository";
import { userJobRepository } from "../../repositories/userJogRepository";


export async function userJobRegister(req: Request, res: Response) {
    const idJob = Number(req.params.idJob)
    const idUser = Number(res.locals.myvalue.id)
    const {name,genero,experiencia,area,idade} = req.body
    try {
        const job = await jobsRepository.findOne({where:{id: idJob}, relations:{company:true}})
        if (!job){
            return res.status(404).json('Vaga não encontrada!')
        }
        
        const user = await userRepository.findOne({where:{id: idUser}})
        if (!user){
            return res.status(404).json('Para se cadastrar precisa está logado!')
        }
        const userRegis = await userJobRepository.findOne({where:{
            userId: idUser,
            jobId: idJob    
        }})
        console.log(userRegis)
        if(userRegis){
            return res.status(400).json('Você já está cadastrado nessa vaga!')
        }
        
        const userJob = new UserJob();
        userJob.userId = idUser; 
        userJob.jobId = idJob
        userJob.stage = 0
        userJob.companyId = job.company.id
        userJob.otherInfo = {
            nome: name,
            idade: idade,
            genero: genero,
            experiencia: experiencia,
            area: area
        }
        await userJobRepository.save(userJob)
        return res.status(200).json(userJob)
    } catch (error) {
        console.log(error)
        res.status(500).json('Internal server error!')
    }
}