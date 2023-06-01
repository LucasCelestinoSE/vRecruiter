import { userRepository } from "../../repositories/userRepository"
import { Response, Request } from "express"
import { companyRepository } from "../../repositories/companyRepository"
export async function listCompanyById(req: Request, res: Response){
try{
    
    const idCompany = Number(req.params.id)
    const company = await companyRepository.findOne({where:{id: idCompany}, select:['id','name','jobs'],relations:{jobs:true}})
    return res.status(200).json({companyId: company?.id, name:company?.name,jobs: company?.jobs})}
catch(error){
    return res.status(500).json('Internal server error')
}}