import { Request, Response } from "express"
import { UserJob } from "../../entities/UserJob";
import { userRepository } from "../../repositories/userRepository";
import { jobsRepository } from "../../repositories/jobsRepository";
import { userJobRepository } from "../../repositories/userJogRepository";
import { json } from "body-parser";
import { stringify } from "querystring";
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
                let test = job.gabarito

               
                const jsonString = JSON.stringify(test);
                const objetoJSON = JSON.parse(jsonString);
                const testCorte = objetoJSON.split(' ')
                console.log(testCorte)
                
                const gabCorte = gabarito.split(" ")
                console.log(gabCorte)
                const temValoresIguais = gabCorte.map((item:string, index:number) => item === testCorte[index])
                const quantidade = temValoresIguais.reduce((count:any, value:any) => {
                    if (value === true) {
                    return count + 1;
                    } else {
                    return count;
                    }
                }, 0);
                userRegis.right_answers = quantidade
                    if (quantidade >= 5){
                        userRegis.stage++
                        await userJobRepository.save(userRegis)
                        return res.status(200)
                        .json(
                        {message: 'Usuário avançou de fase! ',data: userRegis    })
                    }else{
                 userRegis.isOpen = false
                 
            await userJobRepository.save(userRegis)
            return res.status(401).json('Infelizmente você nao atingiu a pontuação mínima!')
            }
        }
        else if(userRegis.stage == 1){
            userRegis.stage++
            userRegis.iframe = iframe
            if (iframe == undefined){
                return res.status(401).json('Insira um valor iframe valido')
            }
            
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