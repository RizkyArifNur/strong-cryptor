import { IIvAndEncryptedData } from './typings'

export function getIvAndEncryptedDataOnly(
  encryptedDataWithSeparator: string,
  separator: string = ':'
): IIvAndEncryptedData {
  /**
   * and get the iv and encrypted data by excluding the separator
   */
  const [ivString, encryptedDataString] = encryptedDataWithSeparator.split(separator)
  return {
    encryptedDataString,
    ivString
  }
}
