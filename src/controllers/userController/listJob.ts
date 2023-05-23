import { jobsRepository } from "../../repositories/jobsRepository"
import { companyRepository } from "../../repositories/companyRepository"
import { Response, Request } from "express"
export async function listJobs(req: Request, res: Response) {
    try {
        const users = await jobsRepository
        .createQueryBuilder('job')
        .select(['job.description', 'job.id', 'job.title'])
        .leftJoin('job.company', 'company')
        .addSelect(['company.id', 'company.name']) // Especifique os campos desejados da relação "company"
        .getMany();

        
              
        return res.status(200).json({users})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Sever Error' })
    }
}