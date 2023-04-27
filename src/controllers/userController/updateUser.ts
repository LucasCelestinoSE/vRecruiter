import { Request,Response } from "express";
import { userRepository } from "../../repositories/userRepository";
export async function update(req: Request, res: Response) {
    const info = req.body
    const { id } = req.params;
    try {
        const users = await userRepository.update({ id: Number(id) }, info);
        return res.status(200).json({ message: 'successfully updated user', up: users })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Sever Error' })
    }
}