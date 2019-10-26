import crypto from 'crypto'
import fs, { readFileSync } from 'fs'
import { ALGORITHM } from '../config'
import { InvalidKeyError, MalformatedError } from '../provider/'
import { base64Regex, hexRegex } from '../regex'
import { BufferAndString, Encoding, IDecryptionOptions, IToBufferOptions } from '../typings'
import { getIvAndEncryptedDataOnly } from '../utils'
/**
 * decrypt the encrypted data from strong-cryptor to string
 * @param {string} encryptedData encrypted string
 * @param {string} key (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data (must be same with the encryption process), please store it in the safe places
 * @param {Encoding} encoding string/text encoding you can choose `base64`(default) or `hex` (must be same with the encryption process)
 * @returns {string} return decrypted string
 */
function stringDecryptor(encryptedData: string, key: string, encoding: Encoding = 'base64') {
  if (key.length !== 32) {
    throw new InvalidKeyError('Key must be 32 characters')
  }

  const { ivString, encryptedDataString } = getIvAndEncryptedDataOnly(encryptedData, encoding)

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

/**
 * decrypt the encrypted data from strong-cryptor to Buffer
 * @param {string} encryptedData encrypted string
 * @param {string} key (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data (must be same with the encryption process), please store it in the safe places
 * @param {Encoding} encoding string/text encoding you can choose `base64`(default) or `hex` (must be same with the encryption process)
 * @returns {Buffer} return decrypted data as a Buffer
 */
function bufferDecryptor(encryptedData: string, key: string, encoding: Encoding = 'base64'): Buffer {
  if (key.length !== 32) {
    throw new InvalidKeyError('Key must be 32 characters')
  }
  const { ivString, encryptedDataString } = getIvAndEncryptedDataOnly(encryptedData, encoding)

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
    const decryptedBuffer = Buffer.concat([decrypted, decipher.final()])
    return decryptedBuffer
  } catch (error) {
    throw new MalformatedError('Encrypted data malformated')
  }
}

/**
 * decrypt the encrypted data from strong-cryptor
 * @param {string} encryptedData encrypted string
 * @param {string} key (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data (must be same with the encryption process), please store it in the safe places
 * @param {IDecryptionOptions} options decryption options, see [[IDecryptionOptions]] for more details
 * @returns {string|Buffer} return decrypted string/Buffer
 */
export function decrypt<T extends IToBufferOptions>(
  encryptedString: string,
  key: string,
  options: T & IDecryptionOptions = {} as T
): BufferAndString<T> {
  const encryptionCount = options.encryptionCount || 1
  let data = encryptedString
  let stringResult = ''
  let bufferResult = Buffer.from('')
  const encoding = options.encoding || 'base64'
  for (let i = 1; i <= encryptionCount; i++) {
    if (i === encryptionCount && options.toBuffer) {
      bufferResult = bufferDecryptor(data, key, encoding)
      continue
    } else if (i === encryptionCount && !options.toBuffer) {
      stringResult = stringDecryptor(data, key, encoding)
    }
    data = stringDecryptor(data, key, encoding)
  }

  if (options.toBuffer) {
    if (options.writeToFile) {
      fs.writeFileSync(options.writeToFile, bufferResult)
    }
    return bufferResult as BufferAndString<T> // escaping typing error
  } else {
    if (options.writeToFile) {
      fs.writeFileSync(options.writeToFile, stringResult)
    }
    return stringResult as BufferAndString<T> // escaping typing error
  }
}

/**
 * decrypt file that already encrypted from strong-cryptor
 * @param {string} filePath path to file
 * @param {string} key (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data (must be same with the encryption process), please store it in the safe places
 * @param {IDecryptionOptions} options decryption options, see [[IDecryptionOptions]] for more details
 * @returns {string|Buffer} return decrypted string/Buffer
 */
export function decryptFile<T extends Required<IToBufferOptions>>(
  filePath: string,
  key: string,
  options: Partial<T> & IDecryptionOptions = {} as T
): BufferAndString<T> {
  const encryptionCount = options.encryptionCount || 1
  let stringResult = ''
  let bufferResult = Buffer.from('')
  const encoding = options.encoding || 'base64'
  // @ts-ignore
  let data = Buffer.from(readFileSync(filePath), encoding).toString()
  for (let i = 1; i <= encryptionCount; i++) {
    if (i === encryptionCount && options.toBuffer) {
      bufferResult = bufferDecryptor(data, key, encoding)
      continue
    } else if (i === encryptionCount && !options.toBuffer) {
      stringResult = stringDecryptor(data, key, encoding)
    }
    data = stringDecryptor(data, key, encoding)
  }

  if (options.toBuffer) {
    if (options.writeToFile) {
      fs.writeFileSync(options.writeToFile, bufferResult)
    }
    return bufferResult as BufferAndString<T> // escaping typing error
  } else {
    if (options.writeToFile) {
      fs.writeFileSync(options.writeToFile, stringResult)
    }
    return stringResult as BufferAndString<T> // escaping typing error
  }
}
