# StrongCryptor

Pure javascript/typescript encryption without any depedencies
![Travis (.org)](https://img.shields.io/travis/RizkyArifNur/strong-cryptor.svg)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/27eea75361be475789b36c15c25db8bf)](https://www.codacy.com/manual/RizkyArifNur/strong-cryptor?utm_source=github.com&utm_medium=referral&utm_content=RizkyArifNur/strong-cryptor&utm_campaign=Badge_Grade)
**_strong-cryptor_** is lightweight utility to manage strong encryption and decryption with **aes-256-cbc** algorithm, strong-cryptor not using any depedencies to process the encryption and decryption, with **_strong-cryptor_** you can simplify the process of encryption and decryption as simple as just calling `encrypt()` and `decrypt` function. This library is pure Javascript library built with Typescript targeting ECMAScript 5(ES5), so it's compatible with most Node.Js backend or Javascript frontend applications.

## List of Contents

- [StrongCryptor](#strongcryptor)
  - [List of Contents](#list-of-contents)
  - [Background](#background)
  - [Changes Log (What's New)](#changes-log-whats-new)
  - [Basic Concept](#basic-concept)
    - [Encryption Concept](#encryption-concept)
    - [Encryption Count Concept](#encryption-count-concept)
  - [Installation](#installation)
  - [Documentations](#documentation)
    - [`encrypt()`](#encrypt)
    - [`decrypt()`](#decrypt)
    - [`genKey()`](#genKey)
  - [Using Encyrpt and Decrypt](#using-encrypt-and-decrypt)
  - [Using Encryption Count](#using-encryption-count)
  - [Generate Key](#generate-key)
  - [Built With](#built-with)
  - [Contribution](#contribution)
  - [Version Management](#version-management)
  - [Authors](#authors)

## Background

Idea behind this project is to avoid the same pattern of every encrypted data that can be learned by attacker and make it easy to decrypted by the attacker.
with strong-cryptor every encryption process will have different result, even the data is same

## Changes Log (What's New)

**What's New in 2.1.0**

- Simplify function parameters to encryption/decryption options object
- Add new feature to set the encryption count(how many times the encryption/decryption run)

For full changelog, please refers to [Release](https://github.com/RizkyArifNur/strong-cryptor/releases) Page.

## Basic Concept

### Encryption Concept

Concept behind **strong-cryptor** is to create randomize IV(Initial Vector) in every encryption process, and embed the IV to the
result of encryption process

| Command         | Result                 |
| --------------- | ---------------------- |
| encrypt('test') | a0aade621f5e00dd21.... |
| encrypt('test') | d0dac814ee1f11be08.... |

### Encryption Count Concept

Concept behind Encryption Count feature is to enable **strong-cryptor** to encrypt more than 1 times.
example if you want tou encrypt text `Hello guys, i am just plain text` for 3 times

| Encryption Count | Result                                                               |
| ---------------- | -------------------------------------------------------------------- |
| 0                | Hello guys, i am just plain text                                     |
| 1                | EiTvqlAtcXPhT5k+LZDhGQH1eAtUrczPsY...                                |
| 2                | zH2bXMRM3iYl6ZCRB2J3bgx8kXo9LaXy+iBJeJwOmTS7OWfGXBk/nIDR...          |
| 3                | U2ghFawbO2VGhsk/l+bc/QYUzBLAXQJsrhkyzRK8s0GTGIuO+OUQMt3s57J2nPUD.... |

with this concept, the encryption result will more hard for the attacker to learn the pattern of the encryption process.

> Note : size of encryption result depends on how many times the encryption run

## Installation

To get this library included on your project, first, you can use package manager like [npm](https://www.npmjs.org/) or [yarn](https://www.yarnpkg.com/) command to get **_strong-cryptor_**.

```bash
npm i strong-cryptor
```

or

```bash
yarn add strong-cryptor
```

## Documentation

List of **_strong-cryptor_** functions.

### encrypt

▸ **encrypt**(`text`: string, `key`: string, `options`: [IEncryptionOptions](../interfaces/_typings_interface_index_.iencryptionoptions.md)): _string_

_Defined in [encryptor.ts:45](https://github.com/RizkyArifNur/strong-cryptor/blob/6f3177b/src/encryptor.ts#L45)_

encrypt the given text with aes-256-cbc encryption algorithm

**Parameters:**

| Name      | Type                                                                                | Default | Description                                                                                                                  |
| --------- | ----------------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `text`    | string                                                                              | -       | string that will be encrypted                                                                                                |
| `key`     | string                                                                              | -       | (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data, please store it in the safe places          |
| `options` | [IEncryptionOptions](../interfaces/_typings_interface_index_.iencryptionoptions.md) | {}      | encryption options, see [IEncryptionOptions](../interfaces/_typings_interface_index_.iencryptionoptions.md) for more details |

**Returns:** _string_

return encrypted string with selected encoding

---

### decrypt

▸ **decrypt**(`encryptedString`: string, `key`: string, `options`: [IDecryptionOptions](../interfaces/_typings_interface_index_.idecryptionoptions.md)): _string_

_Defined in [decryptor.ts:44](https://github.com/RizkyArifNur/strong-cryptor/blob/6f3177b/src/decryptor.ts#L44)_

decrypt the encrypted data from strong-cryptor

**Parameters:**

| Name              | Type                                                                                | Default | Description                                                                                                                                                    |
| ----------------- | ----------------------------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `encryptedString` | string                                                                              | -       | -                                                                                                                                                              |
| `key`             | string                                                                              | -       | (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data (must be same with the encryption process), please store it in the safe places |
| `options`         | [IDecryptionOptions](../interfaces/_typings_interface_index_.idecryptionoptions.md) | {}      | decryption options, see [IDecryptionOptions](../interfaces/_typings_interface_index_.idecryptionoptions.md) for more details                                   |

**Returns:** _string_

return decrypted string

---

### genKey

▸ **genKey**(): _string_

_Defined in [utils.ts:38](https://github.com/RizkyArifNur/strong-cryptor/blob/6f3177b/src/utils.ts#L38)_

generate random 256bits(32 characters) key

**Returns:** _string_

return a 32 characters string

---

For more documentation you can see the [Doc](https://github.com/RizkyArifNur/strong-cryptor/tree/master/docs) folder.

## Using `encrypt()` and `decrypt()`

To use **_strong-cryptor_** encryption first import `encrypt` function from **_strong-cryptor_**

```javascript
import { encrypt } from 'strong-cryptor'
```

then encrypt your data with `encrypt(data,key)` function, with the following paramters

- data - data that will be encrypted
- key - 256bits or 32 characters key

```javascript
import { encrypt } from 'strong-cryptor'
const data = 'your sensitive data'
const key = 'AHBSGTEUET125STSGBDHDJKXMPLKIU12' // please store this key in the safe place
const encryptedData = encrypt(data, key)
```

The code above will use `aes-256-cbc` encryption algorithm and base64 encoding as default encoding.

And to use **_strong-cryptor_** decryption you need import `decrypt` function from **_strong-cryptor_**

```javascript
import { decrypt } from 'strong-cryptor'
```

Then decrypt your data with `decrypt(encryptedData,key)` function, with the following parameters.

- data - data that already encrypted by **_strong-cryptor_** before
- key - 256bits or 32 characters key that used by encryption process before

Full code :

```javascript
import { encrypt, decrypt } from 'strong-cryptor'
const data = 'your sensitive data'
const key = 'AHBSGTEUET125STSGBDHDJKXMPLKIU12' // please store this key in the safe place
const encryptedData = encrypt(data, key)
const data = decrypt(encryptedData, key) // this will return your actual data `your sensitive data`
```

## Using Encryption Count

To make sure your encrypted data is secure, **_strong-cryptor_** providing a new feature called `Encryption Count`, this feature will encrypt your data as many as you want.

To use this feature you only need to fill up the third parameters(encryption options).

```javascript
import { encrypt, decrypt } from 'strong-cryptor'
const data = 'your sensitive data'
const key = 'AHBSGTEUET125STSGBDHDJKXMPLKIU12' // please store this key in the safe place
const encryptedData = encrypt(data, key, { encryptionCount: 12 })
const data = decrypt(encryptedData, key, { encryptionCount: 12 })
```

> Make sure that you provide the encryptionCount at the decryption process too.

## Generate Key

**_strong-cryptor_** can also generate a key for encryption/decryption process.

> but we don't guarantee that the key is secure.

```javascript
import { genKey } from 'strong-cryptor'
const key = genKey() // please store this key in the safe place
```

The `genKey()` will return a 256bits / 32 characters string.

## Built With

Written in [TypeScript](https://typscriptlang.org/), built into ECMAScript 5 using the TypeScript compiler.

## Contribution

This project already using [Travis](https://travis-ci.org/) for CI/CD purpose, and [Codacy](https://www.codacy.com/) for code review and analytics.
To contribute, simply fork this project, and issue a pull request.

> This project using commitizen & cz-conventional-changelog for commit purpose, make sure when you commit a new change, you're using `yarn commit` instead of `git commit` or your PR will be rejected.

## Version Management

We use [SemVer](http://semver.org/) for version management and [semantic-release](https://github.com/semantic-release/semantic-release) for automated release. For the versions available, see the [releases on this repository](https://github.com/RizkyArifNur/strong-cryptor/releases).

## Authors

- Rizky Arif Nur Choir - [RizkyArifNur](https://github.com/RizkyArifNur)

See also the list of [contributors](https://github.com/RizkyArifNur/strong-cryptor/graphs/contributors) who participated in this project.
