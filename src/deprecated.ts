import { deprecate } from 'util'
import { getDeprecateMessage } from './utils'
import * as decryptor from './v2/decryptor'
import * as encryptor from './v2/encryptor'

const v2 = '2.2.0'
const v3 = '3.0.0'
/**
 * @deprecated since version 2.2.0 and will be deleted in version 3.0.0
 */
export const encrypt = deprecate(encryptor.encrypt, getDeprecateMessage(encryptor.encrypt.name, v2, v3))
/**
 * @deprecated since version 2.2.0 and will be deleted in version 3.0.0
 */
export const decrypt = deprecate(decryptor.decrypt, getDeprecateMessage(decryptor.decrypt.name, v2, v3))
