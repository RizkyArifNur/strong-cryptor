import { decrypt, encrypt } from '../src'
const KEY = 'AHBSGTEUET125STSGBDHDJKXMPLKIU12'
const text = 'Hello guys, i am just plain text'

/**
 * your can simply encrypt your data like this
 */
const firstEncryptedText = encrypt(text, KEY)
// a0aade621f5e00dd21543ad2b229620d:0acfa794e2ac705670be3650f0566e697569b22c138006f0d3fbb7618dd5efa2881b48bf3a9baa70b864ca0cc9e0b568
console.log('first encryption', firstEncryptedText)

/**
 * and if your encrypt the same data again, it will have different result
 */
const secondEncryptedtext = encrypt(text, KEY)
// d0dac814ee1f11be08712e23900583ac:6ac71ee71d74b9ee139b0be6212db8962eefb87993867955295b7c305e4f2922e14c3c5bac16f9eb2f2dcead9dbbefc7
console.log('second encryption', secondEncryptedtext)

/**
 * but you still can to decrypt it
 */
const firstDecryptedText = decrypt(firstEncryptedText, KEY, {})
const secondDecryptedtext = decrypt(secondEncryptedtext, KEY, {})
// Hello guys, i am just plain text
console.log('first decryption', firstDecryptedText)
// Hello guys, i am just plain text
console.log('second decryption', secondDecryptedtext)
