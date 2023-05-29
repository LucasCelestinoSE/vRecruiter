import { contatoRepository } from "../../repositories/contatorepository";
import { Contato } from "../../entities/Contato";
import { Request, Response } from "express-serve-static-core";
export async function criarContato(req:Request, res:Response) {
    try {
        const info = req.body
        const name = req.body.name
        const email = req.body.email
        const telefone = req.body.telefone
        const empresa_nome = req.body.empresa_nome
        const cargo = req.body.cargo
        const funcionarios = req.body.funcionarios
        const array = req.body.array
        const contato = await contatoRepository.create(info)
        const savedInfo = await contatoRepository.save(info)
        return res.status(200).json(savedInfo)
    } catch (error) {
        return res.status(500).json(req.body)
    }
}