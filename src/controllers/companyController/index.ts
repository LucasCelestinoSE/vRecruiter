import * as createJob from './createJob'
import * as listUserInJob from './listUserInJob'
import * as listCompany from './listCompany'
import * as criarContato from './createContatos'
export const companyController = {
    ...createJob,
    ...criarContato,
    ...listUserInJob,
    ...listCompany
}