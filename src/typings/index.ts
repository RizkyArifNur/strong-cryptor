import { IToBufferOptions } from './interface'

export type ErrorCode = 'MALFORMATED' | 'INVALID_SEPARATOR' | 'INVALID_KEY'
export type Encoding = 'base64' | 'hex'
export type BufferAndString<T extends IToBufferOptions> = T['toBuffer'] extends true ? Buffer : string
export * from './interface'
