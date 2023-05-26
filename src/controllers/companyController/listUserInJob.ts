import { userJobRepository } from "../../repositories/userJogRepository";
import { Response, Request } from "express"
export async function listPassUserInJob(req: Request, res: Response) {
    const jobId = req.body.id
    const companyId = Number(req.params.id)
    try {
        const users = await userJobRepository.find({where:{
            stage: 2,
            jobId: jobId,
            companyId: companyId
        }});

        return res.status(200).json(users)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Sever Error' })
    }
}