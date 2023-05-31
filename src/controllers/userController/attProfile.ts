import { Profile } from "../../entities/Profile"
import { profileRepository } from "../../repositories/profileRepository"
import { userRepository } from "../../repositories/userRepository"
import { Response, Request } from "express"
export async function attProfile(req: Request, res: Response) {
    const userId = res.locals.myvalue.id
    const info = req.body
    try {
        const user = await userRepository.findOne({where:{
            id: userId
        },relations:{
            profile:true
        }})
        if(!user){
            return res.status(400).json("Não tem usuario pra registrar")
        }
        if(!user.profile.id){
            return res.status(400).json("Não há perfil para editar!")
        }
        const dados = await profileRepository.update(user.profile.id, info);
        return res.status(200).json(dados)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Sever Error' })
    }
}