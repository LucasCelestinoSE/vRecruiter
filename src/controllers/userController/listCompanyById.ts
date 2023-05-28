import { userRepository } from "../../repositories/userRepository"
import { Response, Request } from "express"
import { companyRepository } from "../../repositories/companyRepository"
export async function listCompanyById(req: Request, res: Response){
try{
    
    const idCompany = Number(req.params.id)
    const company = await companyRepository.find({where:{id: idCompany}, select:['id','name']})
    return res.status(200).json(company)}
catch(error){
    return res.status(500).json('Internal server error')
}}