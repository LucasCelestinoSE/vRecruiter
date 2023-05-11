import { AppDataSource } from '../data-source'
import { UserJob } from '../entities/UserJob'

export const userJobRepository = AppDataSource.getRepository(UserJob)
