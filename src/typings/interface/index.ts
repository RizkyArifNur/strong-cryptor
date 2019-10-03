import { Encoding } from '..'

export interface IIvAndEncryptedData {
  ivString: string
  encryptedDataString: string
}

export interface IEncryptionOptions {
  encryptionCount?: number
  encoding?: Encoding
}

export interface IDecryptionOptions {
  encryptionCount?: number
  encoding?: Encoding
}
