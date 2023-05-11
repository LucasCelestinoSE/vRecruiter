import { AppDataSource } from '../data-source'
import { STestResults } from '../entities/STestsResults'

export const STestResultsRepository = AppDataSource.getRepository(STestResults)