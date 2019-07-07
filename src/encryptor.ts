import crypto from 'crypto'
import { ALGORITHM, IV_LENGTH } from './config'
import { InvalidKeyError, InvaliSeparatorError } from './provider'
import { base64RegexValidSeparator, hexRegex } from './regex'
import { Encoding } from './typings'
/**
 * encrypt the given text with aes-256-cbc encryption algorithm
 * @param text string that will be encrypted
 * @param key (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data, please store it in the safe places
 * @param encoding string/text encoding you can choose `base64`(default) or `hex`
 * @param separator `(optional)` this value used to separate the iv and the encrypted data, `default = :` (colon) don't using a valid `hex` and `base64` value for the separator!!
 */
export function encrypt(text: string, key: string, encoding: Encoding = 'base64', separator: string = ':') {
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
  /**
   * this expression will create a random Initialization Vector(IV)
   * for every encrypted data
   */
  const iv = crypto.randomBytes(IV_LENGTH)
  const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(key), iv)
  let encryptedData = cipher.update(text)
  encryptedData = Buffer.concat([encryptedData, cipher.final()])
  /**
   * combine iv to returned encrypted data, and add the separator to distinguish the (IV)
   * data and the encrypted data,
   * and add separator to the end of data, this for decrypt purpose
   */
  return iv.toString(encoding) + separator + encryptedData.toString(encoding)
  /**
   * the result of this function will be like this [IV][Separator][EncryptedData]
   */
}
