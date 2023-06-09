import { userRepository } from "../../repositories/userRepository"
import { Response, Request } from "express"
import { jobsRepository } from "../../repositories/jobsRepository"
export async function listjobById(req: Request, res: Response){
try{
    
    const idJob = Number(req.params.id)
    const job = await jobsRepository.find({where:{id: idJob},select:['id','title','company','description','dados']})
    return res.status(200).json(job)}
catch(error){
    return res.status(500).json('Internal server error')
}}