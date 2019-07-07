import { decrypt, encrypt } from '../src'
import { ErrorProvider } from '../src/provider'
import { hexRegex } from '../src/regex'
import { getIvAndEncryptedDataOnly } from '../src/utils'
describe('Test Hex encryption', () => {
  const key = 'agsbsfsrstsgsfsrsfsrsfsrsgsnshwe'
  const text = 'Hello Fulan!'

  it('Should return a hex string', () => {
    const encryptedDataWithSeparator = encrypt(text, key, 'hex')
    const { ivString, encryptedDataString } = getIvAndEncryptedDataOnly(encryptedDataWithSeparator)
    expect(hexRegex.test(ivString)).toBe(true)
    expect(hexRegex.test(encryptedDataString)).toBe(true)
  })

  it('Should have a same value with the raw string', () => {
    const encrypted = encrypt(text, key, 'hex')
    const decrypted = decrypt(encrypted, key, 'hex')
    expect(decrypted).toBe(text)
  })

  it('Should work with custom separator', () => {
    const encrypted = encrypt(text, key, 'hex', '$')
    const decrypted = decrypt(encrypted, key, 'hex', '$')
    expect(decrypted).toBe(text)
  })

  it('Should throw malformated error', () => {
    try {
      decrypt('ww', key, 'hex')
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('MALFORMATED')
      }
    }
  })

  it('Should throw invalid separator error', () => {
    try {
      decrypt('asas', key, 'hex', 'A')
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_SEPARATOR')
      }
    }

    try {
      decrypt('asas', key, 'hex', ':#')
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_SEPARATOR')
      }
    }

    try {
      encrypt('asas', key, 'hex', 'A')
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_SEPARATOR')
      }
    }

    try {
      encrypt('asas', key, 'hex', ':#')
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_SEPARATOR')
      }
    }
  })

  it('Should throw invalid key error', () => {
    try {
      decrypt('asas', 'as2', 'hex')
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_KEY')
      }
    }

    try {
      decrypt('asas', '', 'hex', ':#')
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_KEY')
      }
    }

    try {
      encrypt('asas', 'as2', 'hex', 'A')
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_KEY')
      }
    }

    try {
      encrypt('asas', '', 'hex', ':#')
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_KEY')
      }
    }
  })
})
