import { userRepository } from "../../repositories/userRepository"
import { Request, Response } from "express"
export async function deleteUserById(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const user = await userRepository.delete(id)
        return res.status(200).json({ message: 'successfully deleted teacher' })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Sever Error' })
    }
}