import { userRepository } from "../../repositories/userRepository"
import { Response, Request } from "express"
export async function listUser(req: Request, res: Response) {
    try {
        const users = await userRepository.find()

        return res.status(200).json(users)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Sever Error' })
    }
}