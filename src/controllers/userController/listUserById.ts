import { userRepository } from "../../repositories/userRepository"
import { Response, Request } from "express"
export async function listUserById(req: Request, res: Response){
try{
    
    const idUser = Number(res.locals.myvalue.id)
    const user = await userRepository.findOneBy({id: Number(idUser)})
    return res.status(200).json(user)}
catch(error){
    return res.status(500).json('Internal server error')
}}