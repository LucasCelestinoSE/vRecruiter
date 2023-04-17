import {Response, Request} from 'express'
import { userRepository }  from '../repositories/userRepository'
import ValitadionContract from "../validador/fluent-validator"
const bcrypt = require('bcryptjs');
export class UserController {

    async listUser(req: Request, res: Response) {
        try {
            const users = await userRepository.find()

            return res.status(200).json(users)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
    async listUserById(req: Request, res: Response){
        try{
        const {id} =req.params
        const user = await userRepository.findOneBy({
            id: Number(id)
        })
        return res.status(200).json(user)
    }catch(error){
        console.log(error)
        return res.status(500).json('Internal server error')
    }
        
    }
    async createUser(req: Request, res: Response) {

        let contract = new ValitadionContract();

        contract.hasMinLen(req.body.name, 3, 'O nome deve conter pelo menos 3 caracteres')
        contract.isEmail(req.body.email, 'E-mail inválido')
        contract.hasMinLen(req.body.password, 6, 'A senha deve conter pelo menos 6 caracteres')

        if (!contract.isValid()) {
            return res.status(400).json(contract.errors())
        } else {
            var info = req.body
            info.password = await bcrypt.hash(info.password, 8);
        }

        try {
            const newUser = userRepository.create(info)
            await userRepository.save(newUser)

            return res.status(201).json(newUser)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    async update(req: Request, res: Response) {
        const info = req.body
        const { id } = req.params;
        try {
            const users = await userRepository.update({ id: Number(id) }, info);
            return res.status(200).json({ message: 'successfully updated user' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
    async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const user = await userRepository.delete(id)
            return res.status(200).json({ message: 'successfully deleted teacher' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
}
