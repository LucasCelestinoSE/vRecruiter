import { AppDataSource } from '../data-source'
import { Job } from '../entities/Job'

export const jobsRepository = AppDataSource.getRepository(Job)