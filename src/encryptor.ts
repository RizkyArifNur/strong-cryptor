import crypto from 'crypto'
import { ALGORITHM, IV_LENGTH } from './config'
import { InvalidKeyError } from './provider'
import { Encoding } from './typings'
import { removeBase64Padding } from './utils'
/**
 * encrypt the given text with aes-256-cbc encryption algorithm
 * @param text string that will be encrypted
 * @param key (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data, please store it in the safe places
 * @param encoding string/text encoding you can choose `base64`(default) or `hex`
 */
export function encrypt(text: string, key: string, encoding: Encoding = 'base64') {
  if (key.length !== 32) {
    throw new InvalidKeyError('Key must be 32 characters')
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
  if (encoding === 'base64') {
    return removeBase64Padding(iv.toString(encoding)) + encryptedData.toString(encoding)
  } else {
    return iv.toString(encoding) + encryptedData.toString(encoding)
  }
  /**
   * the result of this function will be like this [IV][EncryptedData]
   */
}
