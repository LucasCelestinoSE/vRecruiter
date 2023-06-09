import { Profile } from "../../entities/Profile"
import { profileRepository } from "../../repositories/profileRepository"
import { userRepository } from "../../repositories/userRepository"
import { Response, Request } from "express"
export async function profileData(req: Request, res: Response) {
    const userId = res.locals.myvalue.id
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
        if(!user.profile){
            return res.status(401).json('Não existe um perfil cadastrado a esse usuário')
        }
        return res.status(200).json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Sever Error' })
    }
}