import * as createUser from  './createUser'
import * as deleteUserById from './deleteUserById'
import * as listUser from './listUser'
import * as listUserById from './listUserById'
import * as updateUser from './updateUser'
export const userController = {
    ...listUser,
    ...listUserById,
    ...createUser,
    ...deleteUserById,
    ...updateUser
}


