import { join } from 'path'
import { Decryptor, Encryptor } from '../src'
const KEY = 'AHBSGTEUET125STSGBDHDJKXMPLKIU12'
const text = 'Your sensitive data'
const encryptor = new Encryptor({ key: KEY })
const decryptor = new Decryptor({ key: KEY })
/**
 * your can simply encrypt your data like this
 */
const firstEncryptedText = encryptor.encrypt(text)
// a0aade621f5e00dd21543ad2b229620d:0acfa794e2ac705670be3650f0566e697569b22c138006f0d3fbb7618dd5efa2881b48bf3a9baa70b864ca0cc9e0b568
console.log('first encryption', firstEncryptedText)

/**
 * and if your encrypt the same data again, it will have different result
 */
const secondEncryptedtext = encryptor.encrypt(text)
// d0dac814ee1f11be08712e23900583ac:6ac71ee71d74b9ee139b0be6212db8962eefb87993867955295b7c305e4f2922e14c3c5bac16f9eb2f2dcead9dbbefc7
console.log('second encryption', secondEncryptedtext)

/**
 * but you still can to decrypt it
 */
const firstDecryptedText = decryptor.decrypt(firstEncryptedText)
const secondDecryptedtext = decryptor.decrypt(secondEncryptedtext)
// Your sensitive data
console.log('first decryption', firstDecryptedText)
// Your sensitive data
console.log('second decryption', secondDecryptedtext)

/**
 * encryption encoding
 */

/**
 * you can select your encryption encoding by filling up the third parameter (encryption options)
 */
const hexEncryptionEncoding = encryptor.encrypt(text, { encoding: 'hex' })

/**
 * to decrypt it, you must pass the encoding too
 */
const hexDecryptionEncoding = decryptor.decrypt(hexEncryptionEncoding, { encoding: 'hex' })
console.log(hexDecryptionEncoding) // Your sensitive data

/**
 * encryption count
 */

/**
 * you can set your encryption count by filling up the third parameter (encryption options)
 */
const encryptionCount = encryptor.encrypt(text, { encryptionCount: 5 })

/**
 * to decrypt it, you must pass the encoding too
 */
const decryptionCount = decryptor.decrypt(encryptionCount, { encryptionCount: 5 })
console.log(decryptionCount) // Your sensitive data

/**
 * file encryption
 */
const encryptedPath = join(process.cwd(), 'example/encrypted.ec')
const decryptedPath = join(process.cwd(), 'example/output.jpg')
encryptor.encryptFile(join(process.cwd(), '__test__/sample.jpg'), { writeToFile: encryptedPath })
decryptor.decryptFile(encryptedPath, { writeToFile: decryptedPath, toBuffer: true })
