import { IDecryptionOptions } from './interface'

export type ErrorCode = 'MALFORMATED' | 'INVALID_SEPARATOR' | 'INVALID_KEY'
export type Encoding = 'base64' | 'hex'
export type BufferAndString<T extends Pick<IDecryptionOptions, 'toBuffer'>> = T extends { toBuffer: true }
  ? Buffer
  : string
export * from './interface'
