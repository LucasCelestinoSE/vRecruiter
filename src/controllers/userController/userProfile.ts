import { Profile } from "../../entities/Profile"
import { profileRepository } from "../../repositories/profileRepository"
import { userRepository } from "../../repositories/userRepository"
import { Response, Request } from "express"
export async function userProfile(req: Request, res: Response) {
    const userId = res.locals.myvalue.id
    const {redesSociais,genero,idade,telefone,cep,estado,cidade,experiencias,formacoes,idiomas,habilidades,deficiencia} = req.body
    try {
        
        const user = await userRepository.findOne({where:{id:userId}, relations:{profile:true}})
        if (!user){
            return res.status(400).json('Usuário nao existe')
        }
        
        if(user.profile){
            return res.status(400).json('Já existe um perfil cadastrado a essa conta!')
        }
        console.log(user.profile)
        const newProfile = new Profile
        newProfile.genero = genero
        newProfile.idade = idade
        newProfile.telefone = telefone
        newProfile.cep = cep
        newProfile.cidade = cidade
        newProfile.estado = estado
        newProfile.redesSociais = redesSociais
        newProfile.experiencias = experiencias
        newProfile.formacoes = formacoes
        newProfile.idiomas = idiomas
        newProfile.habilidades = habilidades
        newProfile.deficiencia = deficiencia
        user.profile = newProfile
        await profileRepository.save(newProfile)
        await userRepository.update({id:userId},user)
        return res.status(200).json(newProfile)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Sever Error' })
    }
}