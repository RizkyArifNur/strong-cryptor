import crypto from 'crypto'
import { Encoding, IIvAndEncryptedData } from './typings'

/**
 * separate the ivString with the encrypted data string
 * @param encryptedData encrypted data that will be separated
 * @param encoding the encoding that used in the encryption process
 * @returns object that contains the ivString and encrypted data string
 */
export function getIvAndEncryptedDataOnly(encryptedData: string, encoding: Encoding): IIvAndEncryptedData {
  switch (encoding) {
    case 'base64':
      return {
        encryptedDataString: encryptedData.substring(22, encryptedData.length),
        ivString: encryptedData.substring(0, 22)
      }

    case 'hex':
      return {
        encryptedDataString: encryptedData.substring(32, encryptedData.length),
        ivString: encryptedData.substring(0, 32)
      }
  }
}
/**
 * remove padding( `=` | equals sign) for string that encoded with base64
 * @param encodedString base64 string that the padding will be removed
 * @returns base64 string that the padding already removed
 */
export function removeBase64Padding(encodedString: string) {
  return encodedString.replace(/={1,2}$/, '')
}

/**
 * generate random 256bits(32 characters) key
 * @returns return a 32 characters string
 */
export function genKey(): string {
  return crypto.randomBytes(16).toString('hex')
}
