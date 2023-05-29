import { AppDataSource } from '../data-source'
import { Contato } from '../entities/Contato'

export const contatoRepository = AppDataSource.getRepository(Contato)