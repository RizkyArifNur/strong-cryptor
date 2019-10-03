import crypto from 'crypto'
import { Encoding, IIvAndEncryptedData } from './typings'

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

export function removeBase64Padding(encodedString: string) {
  return encodedString.replace(/={1,2}$/, '')
}

export function genKey(): string {
  return crypto.randomBytes(16).toString('hex')
}
