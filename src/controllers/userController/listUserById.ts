import { userRepository } from "../../repositories/userRepository"
import { Response, Request } from "express"
export async function listUserById(req: Request, res: Response){
try{
    
    const {id} =req.params
    const user = await userRepository.findOneBy({id: Number(id)})
    return res.status(200).json(user)}
catch(error){
    return res.status(500).json('Internal server error')
}}