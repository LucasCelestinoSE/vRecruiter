import { AppDataSource } from '../data-source'
import { SkillTests } from '../entities/SkillTest'

export const skillTestRepository = AppDataSource.getRepository(SkillTests)