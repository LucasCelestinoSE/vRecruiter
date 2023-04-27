const bcrypt = require('bcryptjs');
import { userRepository } from "../../repositories/userRepository";
import ValitadionContract from "../../validador/fluent-validator"
import {Request, Response} from 'express'
export async function createUser(req: Request, res: Response) {

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
        return res.status(400).json({ message: 'Já existe uma conta referente a esse email' })
    }
}