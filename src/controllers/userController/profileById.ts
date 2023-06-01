import { Profile } from "../../entities/Profile"
import { profileRepository } from "../../repositories/profileRepository"
import { userRepository } from "../../repositories/userRepository"
import { Response, Request } from "express"
export async function profileById(req: Request, res: Response) {
    const userId = Number(req.params.id)
    console.log(userId)
    try {
        const user = await userRepository.findOne({where:{
            id: userId
        },relations:{
            profile:true
        }})
        if(!user){
            return res.status(401).json('Não existe esse usuário cadastrado no sistema')
        }
        return res.status(200).json({contato: [user.profile.telefone,user.email], })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Sever Error' })
    }
}