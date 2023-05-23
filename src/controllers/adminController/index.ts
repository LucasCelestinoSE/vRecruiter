import * as createCompany from './createCompany'
import * as renderJobs from './renderJob'
import * as listaJobById from './listJobByjobId'
export const adminController = {
    ...createCompany,
    ...renderJobs,
    ...listaJobById
}