import { Request, Response } from 'express'

export async function test(req: Request, res: Response){
    const name = req.body.name
    return res.status(200).send(name)
    }