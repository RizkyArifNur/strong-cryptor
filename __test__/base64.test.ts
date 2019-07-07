import { decrypt, encrypt } from '../src'
import { ErrorProvider } from '../src/provider'
import { base64Regex } from '../src/regex'
import { getIvAndEncryptedDataOnly } from '../src/utils'
describe('Test Base64 encryption', () => {
  const key = 'agsbsfsrstsgsfsrsfsrsfsrsgsnshwe'
  const text = 'Hello Fulan!'

  it('Should return a base64 string', () => {
    const encryptedDataWithSeparator = encrypt(text, key, 'base64')
    const { ivString, encryptedDataString } = getIvAndEncryptedDataOnly(encryptedDataWithSeparator)
    expect(base64Regex.test(ivString)).toBe(true)
    expect(base64Regex.test(encryptedDataString)).toBe(true)
  })

  it('Should have a same value with the raw string', () => {
    const encrypted = encrypt(text, key, 'base64')
    const decrypted = decrypt(encrypted, key, 'base64')
    expect(decrypted).toBe(text)
  })

  it('Should work with custom separator', () => {
    const encrypted = encrypt(text, key, 'base64', '#')
    const decrypted = decrypt(encrypted, key, 'base64', '#')
    expect(decrypted).toBe(text)
  })

  it('Should throw malformated error', () => {
    try {
      decrypt('as2#', key, 'base64')
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('MALFORMATED')
      }
    }
  })

  it('Should throw invalid separator error', () => {
    try {
      decrypt('asas', key, 'base64', 'A')
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_SEPARATOR')
      }
    }

    try {
      decrypt('asas', key, 'base64', ':#')
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_SEPARATOR')
      }
    }

    try {
      encrypt('asas', key, 'base64', 'A')
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_SEPARATOR')
      }
    }

    try {
      encrypt('asas', key, 'base64', ':#')
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_SEPARATOR')
      }
    }
  })

  it('Should throw invalid key error', () => {
    try {
      decrypt('asas', 'as2', 'base64')
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_KEY')
      }
    }

    try {
      decrypt('asas', '', 'base64', ':#')
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_KEY')
      }
    }

    try {
      encrypt('asas', 'as2', 'base64', 'A')
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_KEY')
      }
    }

    try {
      encrypt('asas', '', 'base64', ':#')
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_KEY')
      }
    }
  })
})
