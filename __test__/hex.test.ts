import { decrypt, encrypt } from '../src'
import { ErrorProvider } from '../src/provider'
import { hexRegex } from '../src/regex'
import { getIvAndEncryptedDataOnly } from '../src/utils'
const key = 'agsbsfsrstsgsfsrsfsrsfsrsgsnshwe'
const text = 'Hello Fulan!'
const encryptionCount = 12

describe('Test Default hex encryption', () => {
  it('Should return a hex string', () => {
    const encryptedData = encrypt(text, key, { encoding: 'hex' })
    const { ivString, encryptedDataString } = getIvAndEncryptedDataOnly(encryptedData, 'hex')
    expect(hexRegex.test(ivString)).toBe(true)
    expect(hexRegex.test(encryptedDataString)).toBe(true)
  })

  it('Should have a same value with the raw string', () => {
    const encrypted = encrypt(text, key, { encoding: 'hex' })
    const decrypted = decrypt(encrypted, key, { encoding: 'hex' })
    expect(decrypted).toBe(text)
  })
})

describe('Test encryption options', () => {
  it('Should return a hex string', () => {
    const encryptedData = encrypt(text, key, { encoding: 'hex' })
    const { ivString, encryptedDataString } = getIvAndEncryptedDataOnly(encryptedData, 'hex')
    expect(hexRegex.test(ivString)).toBe(true)
    expect(hexRegex.test(encryptedDataString)).toBe(true)
  })

  it('Should have a same value with the raw string', () => {
    const encrypted = encrypt(text, key, { encoding: 'hex' })
    const decrypted = decrypt(encrypted, key, { encoding: 'hex' })
    expect(decrypted).toBe(text)
  })

  it('Should can be decrypted', () => {
    const encrypted = encrypt(text, key, { encryptionCount })
    const decrypted = decrypt(encrypted, key, { encryptionCount })
    expect(decrypted).toBe(text)
  })
})

describe('Test Hex encryption validation', () => {
  it('Should throw malformated error', () => {
    try {
      decrypt('as2#', key, { encoding: 'hex' })
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('MALFORMATED')
      }
    }
  })

  it('Should throw invalid key error', () => {
    try {
      decrypt('asas', 'as2', { encoding: 'hex' })
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_KEY')
      }
    }

    try {
      decrypt('asas', '', { encoding: 'hex' })
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_KEY')
      }
    }

    try {
      encrypt('asas', 'as2', { encoding: 'hex' })
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_KEY')
      }
    }

    try {
      encrypt('asas', '', { encoding: 'hex' })
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_KEY')
      }
    }
  })

  it('Should not be the same with the raw data', () => {
    const encrypted = encrypt(text, key, { encryptionCount })
    const decrypted1 = decrypt(encrypted, key, { encryptionCount: 10 })
    const decrypted2 = decrypt(encrypted, key, { encryptionCount: 10 })
    expect(decrypted1).not.toBe(text)
    expect(decrypted2).not.toBe(text)
  })
})
