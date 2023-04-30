import { Request, Response } from "express"
import { userRepository } from "../../repositories/userRepository";
import { jobsRepository } from "../../repositories/jobsRepository";
export async function userJobRegister(req: Request, res: Response) {
    const { idJob } = req.params;
    const idUser = 1
    try {
        const job = await jobsRepository.findOneBy({ id: Number(idJob) })

        if (!job) {
            return res.status(404).json({ message: 'Aula não existe' })
        }

        const user = await userRepository.findOneBy({
            id: Number(idUser),
        })

        if (!user) {
            return res.status(404).json({ message: 'Disciplina não existe' })
        }

        const jobUpdate = {
            ...job,
            users: [user],
        }

        await jobsRepository.save(jobUpdate)

        return res.status(204).send()
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Sever Error' })
    }
}