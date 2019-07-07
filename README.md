# strong-cryptor

Strong encryption and decryption node js

![Travis (.org)](https://img.shields.io/travis/RizkyArifNur/strong-cryptor.svg)

strong-cryptor is utility to manage strong encryption and decryption with **aes-256-cbc** algorithm, idea behind this project is to
avoid the same pattern every encrypted data that can be learned by attacker and make it easy to decrypted by the attacker.

with strong-cryptor every encryption process will have different result, even the data is same

## Basic Concept

Concept behind **strong-cryptor** is to create randomize IV(Initial Vector) in every encryption process, and embed the IV to the
result of encryption process

| Command         | Result                 |
| --------------- | ---------------------- |
| encrypt('test') | a0aade621f5e00dd21.... |
| encrypt('test') | d0dac814ee1f11be08.... |

## Installation

```bash
npm i strong-cryptor
```

or

```bash
yarn add strong-cryptor
```

## Example Usage

### Encryption

```ts
/**
 * your can simply encrypt your data like this
 */
import { encrypt } from 'strong-cryptor'
const KEY = 'AHBSGTEUET125STSGBDHDJKXMPLKIU12' // must be 32 characters
const text = 'Hello guys, i am just plain text'
const encryptedText = encrypt(text, KEY, 'hex')
console.log(encryptedText)
// a0aade621f5e00dd21543ad2b229620d:0acfa794e2ac705670be3650f0566e697569b22c138006f0d3fbb7618dd5efa2881b48bf3a9baa70b864ca0cc9e0b568
```

### Decryption

```ts
/**
 * and when you try to decrypt, make sure that `encoding` and `key` that you pass is same with the encryption prosess before
 */
import { decrypt } from 'strong-cryptor'
const decryptedText = decrypt(encryptedText, KEY, 'hex')
// Hello guys, i am just plain text
console.log(decryptedText)
```

for more example you can see in the [example](https://github.com/RizkyArifNur/strong-cryptor/tree/master/example) folder
