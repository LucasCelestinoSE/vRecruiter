import { companyRepository } from "../../repositories/companyRepository";
import { Response, Request } from "express"
export async function listCompany(req: Request, res: Response) {
    const jobId = req.body.id
    try {
        const companys = await companyRepository.find({select:['id', 'name']});

        return res.status(200).json({empresas:companys})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Sever Error' })
    }
}