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
}
/**
 * options that wil be used in decryption process
 */
export interface IToBufferOptions {
  /**
   * return buffer instead of string, use this if you're encrypting a buffer/file
   */
  toBuffer?: boolean
}

/**
 * options that wil be used in encryption process in new Class Base Model
 */
export interface IEncryptionOptionsClassBase extends IEncryptionOptions {
  /**
   * @key 256bits (32 charcters) string that used to encrypt dan decrypt the data (must be same with the encryption process), please store it in the safe places
   */
  key: string
}
/**
 * options that wil be used in decryption process in new Class Base Model
 */
export interface IDecryptionOptionsClassBase extends IDecryptionOptions, IToBufferOptions {
  /**
   * @key 256bits (32 charcters) string that used to encrypt dan decrypt the data (must be same with the encryption process), please store it in the safe places
   */
  key: string
}
