import { jobsRepository } from "../../repositories/jobsRepository"
import { companyRepository } from "../../repositories/companyRepository"
import { Response, Request } from "express"
export async function listJobs(req: Request, res: Response) {
    try {
        const users = await jobsRepository.find({select:['company',"description","id","title"]})
        const companys = users.map((x)=> x.company)
        const companyPromises = companys.map(async (x) => {
            const company = await companyRepository.find({
              where: {
                id: x
              }
            });
            return company;
          });
          
          const companyResults = await Promise.all(companyPromises);
        return res.status(200).json({users,companyResults})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Sever Error' })
    }
}