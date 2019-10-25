import { Encoding } from '..'

export interface IIvAndEncryptedData {
  ivString: string
  encryptedDataString: string
}

/**
 * options that wil be used in encryption process
 */
export interface IEncryptionOptions {
  /**
   * @encryptionCount number that represent how many encryption will be executed
   */
  encryptionCount?: number
  /**
   * @encoding `base64` or `hex` encoding that will be used for encryption process
   */
  encoding?: Encoding

  /**
   * file path to write the result of encryption
   */
  writeToFile?: string
}

/**
 * options that wil be used in decryption process
 */
export interface IDecryptionOptions {
  /**
   * @encryptionCount number that represent how many decryption will be executed
   */
  encryptionCount?: number
  /**
   * @encoding `base64` or `hex` encoding that will be used for decryption process
   */
  encoding?: Encoding

  /**
   * file path to write the result of decryption
   */
  writeToFile?: string

  /**
   * return buffer instead of string, use this if you're encrypting a buffer/file
   */
  toBuffer?: boolean
}
