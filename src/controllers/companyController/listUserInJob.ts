import { userJobRepository } from "../../repositories/userJogRepository";
import { Response, Request } from "express"
export async function ranking(req: Request, res: Response) {
    const jobId = Number(req.params.jobId)
    const companyId = Number(req.params.companyId)
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