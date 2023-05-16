import { Request, Response } from "express"
import { UserJob } from "../../entities/UserJob";
import { userRepository } from "../../repositories/userRepository";
import { jobsRepository } from "../../repositories/jobsRepository";
import { userJobRepository } from "../../repositories/userJogRepository";
import { json } from "body-parser";
export async function userJobPhases(req: Request, res: Response) {
    const idJob = Number(req.params.idJob)
    const idUser = Number(res.locals.myvalue.id)
    const gabarito = req.body.gabarito
    const iframe = req.body.iframe
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
        if (userRegis.isOpen == true){
        if(userRegis.stage == 0){
            const test = job.feedback
            const jsonString = JSON.stringify(test);
            const objetoJSON = JSON.parse(jsonString);
            const testCorte = objetoJSON.split(' ')
            const gabCorte = gabarito.split(" ")
            const temValoresIguais = gabCorte.map((item:string, index:number) => item === testCorte[index])
            const quantidade = temValoresIguais.reduce((count:any, value:any) => {
                if (value === true) {
                  return count + 1;
                } else {
                  return count;
                }
              }, 0);
            if (quantidade >= 5){
                userRegis.stage++
                await userJobRepository.save(userRegis)
                return res.status(200)
                .json(
                {message: 'Usuário avançou de fase! ',data: userRegis    })
            }else{
            userRegis.isOpen = false
            await userJobRepository.save(userRegis)
            return res.status(200).json('Infelizmente você nao atingiu a pontuação mínima!')
            }
        }
        else if(userRegis.stage == 2){
            userRegis.stage++
            if (iframe == undefined){
                return res.status(401).json('Insira um valor iframe valido  ')
            }
            userRegis.phase_3Data = iframe
            await userJobRepository.save(userRegis)
            return res.status(200).json('Iframe enviado com sucesso!')
        }}else{
            return res.status(401).json("Você não está mais em condições para essa seleção...")
        }
    } catch (error) {
        console.log(error)
        res.status(500).json('Internal server error!')
    }
}