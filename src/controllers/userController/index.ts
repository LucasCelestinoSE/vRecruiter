import * as createUser from  './createUser'
import * as deleteUserById from './deleteUserById'
import * as listUser from './listUser'
import * as listUserById from './listUserById'
import * as updateUser from './updateUser'
import * as userJobRegister from './userJobRegiste'
import * as userJobPhase from './userJobPhases'
import * as login from './login'
import * as job from './listJob'
import * as listCompanyById from './listCompanyById'
import * as listJobById from './listJobById'
import * as userProfile from './userProfile'
import * as profileData from './ProfileData'
import * as attProfile from './attProfile'
export const userController = {
    ...listUser,
    ...listUserById,
    ...createUser,
    ...deleteUserById,
    ...updateUser,
    ...userJobRegister,
    ...userJobPhase,
    ...login,
    ...job,
    ...listCompanyById,
    ...listJobById,
    ...userProfile,
    ...profileData,
    ...attProfile
}


