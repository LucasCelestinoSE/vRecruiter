import * as createCompany from './createCompany' 
import * as login from './login'
import * as test from './teste'
export const adminController = {
    ...createCompany,
    ...login,
    ...test
}