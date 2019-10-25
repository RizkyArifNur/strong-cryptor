import crypto from 'crypto'
import fs from 'fs'
import { ALGORITHM, IV_LENGTH } from './config'
import { InvalidKeyError } from './provider'
import { Encoding, IEncryptionOptionsClassBase } from './typings'
import { removeBase64Padding } from './utils'
export class Encryptor {
  private options: IEncryptionOptionsClassBase

  /**
   * Create new instance of encryptor
   * @param {string} key (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data, please store it in the safe places
   * @param {IEncryptionOptions} options (encryption options, see [[IEncryptionOptions]] for more details
   */
  constructor(options: IEncryptionOptionsClassBase) {
    if (options.key.length !== 32) {
      throw new InvalidKeyError('Key must be 32 characters')
    }
    this.options = options
  }

  /**
   * set key for encryption process
   * @param {string} key (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data, please store it in the safe places
   */
  setKey(key: string) {
    if (key.length !== 32) {
      throw new InvalidKeyError('Key must be 32 characters')
    }
    this.options.key = key
  }

  /**
   * set options for encryption process
   * @param {IEncryptionOptions} options (encryption options, see [[IEncryptionOptions]] for more details
   */
  setOptions(options: Partial<IEncryptionOptionsClassBase>) {
    this.options = { ...options, key: options.key ? options.key : this.options.key }
  }

  /**
   * encrypt the given text with aes-256-cbc encryption algorithm
   * @param {string | Buffer} data string or Buffer that will be encrypted
   * @param {string} key (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data, please store it in the safe places
   * @param {IEncryptionOptions} options encryption options, see [[IEncryptionOptions]] for more details
   * @returns {string} return encrypted string with selected encoding
   */
  encrypt(data: string | Buffer, options: Partial<IEncryptionOptionsClassBase> = this.options): string {
    const key = options.key || this.options.key
    if (key.length !== 32 || options.key === '') {
      throw new InvalidKeyError('Key must be 32 characters')
    }
    const encryptionCount = options.encryptionCount || 1
    const encoding = options.encoding || 'base64'
    let result = ''
    for (let i = 1; i <= encryptionCount; i++) {
      if (i === 1) {
        result = this.encryptor(data, key, encoding)
        continue
      }
      result = this.encryptor(result, key, encoding)
    }
    if (options.writeToFile) {
      fs.writeFileSync(options.writeToFile, result)
    }
    return result
  }

  /**
   * encrypt the given text with aes-256-cbc encryption algorithm
   * @param {string} pathToFile string of file path
   * @param {string} key (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data, please store it in the safe places
   * @param {IEncryptionOptions} options encryption options, see [[IEncryptionOptions]] for more details
   * @returns {string} return encrypted string with selected encoding
   */
  encryptFile(pathToFile: string, options: Partial<IEncryptionOptionsClassBase> = this.options): string {
    const key = options.key || this.options.key
    if (key.length !== 32 || options.key === '') {
      throw new InvalidKeyError('Key must be 32 characters')
    }
    const encryptionCount = options.encryptionCount || 1
    const encoding = options.encoding || 'base64'
    // @ts-ignore
    const data = Buffer.from(fs.readFileSync(pathToFile), 'binary')
    let result = ''
    for (let i = 1; i <= encryptionCount; i++) {
      if (i === 1) {
        result = this.encryptor(data, key, encoding)
        continue
      }
      result = this.encryptor(result, key, encoding)
    }
    if (options.writeToFile) {
      fs.writeFileSync(options.writeToFile, result)
    }
    return result
  }

  /**
   * encrypt the given text with aes-256-cbc encryption algorithm
   * @param {string|Buffer} data string or buffer that will be encrypted
   * @param {string} key (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data, please store it in the safe places
   * @param {Encoding} encoding string/text encoding you can choose `base64`(default) or `hex`
   * @returns {string} return encrypted string with selected encoding
   */
  private encryptor(data: string | Buffer, key: string, encoding: Encoding = 'base64') {
    /**
     * this expression will create a random Initialization Vector(IV)
     * for every encrypted data
     */
    const iv = crypto.randomBytes(IV_LENGTH)
    const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(key), iv)
    let encryptedData = cipher.update(data)
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
}
