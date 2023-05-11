import { Request, Response } from "express"
import { UserJob } from "../../entities/UserJob";
import { userRepository } from "../../repositories/userRepository";
import { jobsRepository } from "../../repositories/jobsRepository";
import { userJobRepository } from "../../repositories/userJogRepository";
export async function userJobPhases(req: Request, res: Response) {
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
        if(!userRegis){
            return res.status(400).json('Você não está cadastrado nessa vaga!')
        }
        if(userRegis.stage < 4){
            userRegis.stage++
        }else{
            return res.status(400).json('Não é permitido mais continuar')
        }
        
        await userJobRepository.save(userRegis)
        return res.status(200)
        .json(
            {message: 'Usuário avançou de fase! ',data: userRegis    })
    } catch (error) {
        console.log(error)
        res.status(500).json('Internal server error!')
    }
}