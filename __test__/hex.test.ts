// tslint:disable: deprecation
import { readFileSync, unlinkSync } from 'fs'
import { join } from 'path'
import { Decryptor, Encryptor } from '../src'
import { ErrorProvider } from '../src/provider'
import { hexRegex } from '../src/regex'
import { getIvAndEncryptedDataOnly } from '../src/utils'
const key = 'agsbsfsrstsgsfsrsfsrsfsrsgsnshwe'
const text = 'Hello Fulan!'
const encryptionCount = 12
const encryptor = new Encryptor({ key })
const decryptor = new Decryptor({ key })
describe('Test Default hex encryption', () => {
  it('Should return a hex string', () => {
    const encryptedData = encryptor.encrypt(text, { encoding: 'hex' })
    const { ivString, encryptedDataString } = getIvAndEncryptedDataOnly(encryptedData, 'hex')
    expect(hexRegex.test(ivString)).toBe(true)
    expect(hexRegex.test(encryptedDataString)).toBe(true)
  })

  it('Should have a same value with the raw string', () => {
    const encrypted = encryptor.encrypt(text, { encoding: 'hex' })
    const decrypted = decryptor.decrypt(encrypted, { encoding: 'hex' })
    expect(decrypted).toBe(text)
  })
})

describe('Test encryption options', () => {
  it('Should return a hex string', () => {
    const encryptedData = encryptor.encrypt(text, { encoding: 'hex' })
    const { ivString, encryptedDataString } = getIvAndEncryptedDataOnly(encryptedData, 'hex')
    expect(hexRegex.test(ivString)).toBe(true)
    expect(hexRegex.test(encryptedDataString)).toBe(true)
  })

  it('Should have a same value with the raw string', () => {
    const encrypted = encryptor.encrypt(text, { encoding: 'hex' })
    const decrypted = decryptor.decrypt(encrypted, { encoding: 'hex' })
    expect(decrypted).toBe(text)
  })

  it('Should can be decrypted', () => {
    const encrypted = encryptor.encrypt(text, { encryptionCount })
    const decrypted = decryptor.decrypt(encrypted, { encryptionCount })
    expect(decrypted).toBe(text)
  })
})

describe('Test Hex encryption validation', () => {
  it('Should throw malformated error', () => {
    try {
      decryptor.decrypt('as2#', { encoding: 'hex' })
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('MALFORMATED')
      }
    }
  })

  it('Should throw invalid key error', () => {
    try {
      decryptor.decrypt('asas', { encoding: 'hex', key: 'as2' })
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_KEY')
      }
    }

    try {
      decryptor.decrypt('asas', { encoding: 'hex', key: '' })
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_KEY')
      }
    }

    try {
      encryptor.encrypt('asas', { encoding: 'hex', key: 'as2' })
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_KEY')
      }
    }

    try {
      encryptor.encrypt('asas', { encoding: 'hex', key: '' })
    } catch (error) {
      expect(error instanceof ErrorProvider).toBe(true)
      if (error instanceof ErrorProvider) {
        expect(error.code).toBe('INVALID_KEY')
      }
    }
  })

  it('Should not be the same with the raw data', () => {
    const encrypted = encryptor.encrypt(text, { encryptionCount })
    const decrypted1 = decryptor.decrypt(encrypted, { encryptionCount: 10 })
    const decrypted2 = decryptor.decrypt(encrypted, { encryptionCount: 10 })
    expect(decrypted1).not.toBe(text)
    expect(decrypted2).not.toBe(text)
  })
})

describe('Test File Encryption', () => {
  const testPath = join(process.cwd(), '__test__')
  const sampleImagePath = join(testPath, 'sample.jpg')
  const encryptedPath = join(testPath, 'sample.sc')
  const decryptedPath = join(testPath, 'sample-decrypted.jpg')
  const encryptedFile = encryptor.encryptFile(sampleImagePath, {
    encoding: 'hex',
    encryptionCount: 2,
    writeToFile: encryptedPath
  })

  it('Should can encrypt a file', () => {
    expect(hexRegex.test(encryptedFile)).toBe(true)
  })

  it('Should can decrypt a file', () => {
    const decrypted = decryptor.decryptFile(encryptedPath, {
      encoding: 'hex',
      encryptionCount: 2,
      toBuffer: true,
      writeToFile: decryptedPath
    })
    expect(Buffer.isBuffer(decrypted)).toBe(true)
  })

  it('Should have the same value with data before encrypted', () => {
    const sampleJpg = readFileSync(sampleImagePath)
    const decryptedSample = readFileSync(decryptedPath)
    expect(sampleJpg).toStrictEqual(decryptedSample)
  })
  afterAll(() => {
    unlinkSync(encryptedPath)
    unlinkSync(decryptedPath)
  })
})
