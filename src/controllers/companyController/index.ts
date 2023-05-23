import * as createJob from './createJob'
import * as listUserInJob from './listUserInJob'
import * as listCompany from './listCompany'
export const companyController = {
    ...createJob,

    ...listUserInJob,
    ...listCompany
}