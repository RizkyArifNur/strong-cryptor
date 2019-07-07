import crypto from 'crypto'
import { ALGORITHM } from './config'
import { InvalidKeyError, InvaliSeparatorError, MalformatedError } from './provider/'
import { base64Regex, base64RegexValidSeparator, hexRegex } from './regex'
import { Encoding } from './typings'
import { getIvAndEncryptedDataOnly } from './utils'
/**
 * decrypt the encrypted data from strong-cryptor
 * @param encryptedData encrypted string
 * @param key (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data (must be same with the encryption process), please store it in the safe places
 * @param encoding string/text encoding you can choose `base64`(default) or `hex` (must be same with the encryption process)
 * @param separator `(optional)` this value used to separate the iv and the encrypted data (must be same with the encryption process), `default = :` (colon) don't using a valid `hex` and `base64` value for the separator!!
 */
export function decrypt(encryptedData: string, key: string, encoding: Encoding = 'base64', separator: string = ':') {
  if (key.length !== 32) {
    throw new InvalidKeyError('Key must be 32 characters')
  }
  if (separator.length !== 1) {
    throw new InvaliSeparatorError('Separator must be one character')
  }
  if (encoding === 'hex' && hexRegex.test(separator)) {
    throw new InvaliSeparatorError('Please input separator that exclude the hexadecimal value')
  } else if (encoding === 'base64' && base64RegexValidSeparator.test(separator)) {
    throw new InvaliSeparatorError('Please input separator that exclude the base64 value')
  }
  const { ivString, encryptedDataString } = getIvAndEncryptedDataOnly(encryptedData, separator)
  if (encoding === 'base64' && !base64Regex.test(ivString)) {
    throw new MalformatedError('Encrypted data malformated')
  } else if (encoding === 'hex' && !hexRegex.test(ivString)) {
    throw new MalformatedError('Encrypted data malformated')
  }
  try {
    const iv = Buffer.from(ivString, encoding)
    const encryptedText = Buffer.from(encryptedDataString, encoding)
    const decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(key), iv)
    const decrypted = decipher.update(encryptedText)
    const decriptedString = decrypted.toString() + decipher.final().toString()
    return decriptedString
  } catch (error) {
    throw new MalformatedError('Encrypted data malformated')
  }
}
