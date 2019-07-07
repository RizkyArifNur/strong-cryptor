// tslint:disable: max-classes-per-file
import { ErrorCode } from '../typings'

export class ErrorProvider {
  code: ErrorCode
  message: string
  name = 'StrongCryptorErr'
  constructor() {
    Error.captureStackTrace(this, ErrorProvider)
  }
}

export class MalformatedError extends ErrorProvider {
  constructor(message: string) {
    super()
    this.code = 'MALFORMATED'
    this.message = message
  }
}

export class InvaliSeparatorError extends ErrorProvider {
  constructor(message: string) {
    super()
    this.code = 'INVALID_SEPARATOR'
    this.message = message
  }
}

export class InvalidKeyError extends ErrorProvider {
  constructor(message: string) {
    super()
    this.code = 'INVALID_KEY'
    this.message = message
  }
}
