import { Encoding, IIvAndEncryptedData } from './typings'

export function getIvAndEncryptedDataOnly(encryptedData: string, encoding: Encoding): IIvAndEncryptedData {
  /**
   * and get the iv and encrypted data by excluding the separator
   */
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
