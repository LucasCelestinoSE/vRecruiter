import { profileRepository } from "../../repositories/profileRepository"
import { userRepository } from "../../repositories/userRepository"
import { Response, Request } from "express"
export async function userProfile(req: Request, res: Response) {
    const userId = res.locals.myvalue.id
    const info = req.body
    try {
        const profile = profileRepository.findOne({where:{id:userId}})
        if(!profile){
        return res.sendStatus(400).json('Perfil não existe!')
    }
        const savedProf = await profileRepository.create(info)
         await profileRepository.save(savedProf)

        return res.status(200).json(savedProf)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Sever Error' })
    }
}