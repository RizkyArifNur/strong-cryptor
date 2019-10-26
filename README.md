# StrongCryptor

Pure javascript/typescript encryption without any depedencies
<br />

![Travis (.org)](https://img.shields.io/travis/RizkyArifNur/strong-cryptor.svg)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/27eea75361be475789b36c15c25db8bf)](https://www.codacy.com/manual/RizkyArifNur/strong-cryptor?utm_source=github.com&utm_medium=referral&utm_content=RizkyArifNur/strong-cryptor&utm_campaign=Badge_Grade)
<br/>
[![npm version](https://badge.fury.io/js/strong-cryptor.svg)](https://badge.fury.io/js/strong-cryptor)

**_strong-cryptor_** is lightweight utility to manage strong encryption and decryption with **aes-256-cbc** algorithm, strong-cryptor not using any depedencies to process the encryption and decryption, with **_strong-cryptor_** you can simplify the process of encryption and decryption as simple as just calling `encrypt()` and `decrypt` function. This library is pure Javascript library built with Typescript targeting ECMAScript 5(ES5), so it's compatible with most Node.Js backend or Javascript frontend applications.

## List of Contents

- [StrongCryptor](#strongcryptor)
  - [List of Contents](#list-of-contents)
  - [Background](#background)
  - [Changes Log (What's New)](#changes-log-whats-new)
  - [Deprecation](#deprecation)
  - [Basic Concept](#basic-concept)
    - [Encryption Concept](#encryption-concept)
    - [Encryption Count Concept](#encryption-count-concept)
  - [Installation](#installation)
  - [Documentations](#documentation)
  - [Basic Encryption](#basic-encryption)
  - [Using Encryption Count](#using-encryption-count)
  - [File Encryption](#file-encryption)
  - [Write to File](#write-to-file)
  - [Generate Key](#generate-key)
  - [Built With](#built-with)
  - [Contribution](#contribution)
  - [Version Management](#version-management)
  - [Authors](#authors)

## Background

Idea behind this project is to avoid the same pattern of every encrypted data that can be learned by attacker and make it easy to decrypted by the attacker.
with strong-cryptor every encryption process will have different result, even the data is same

## Changes Log (What's New)

**What's New in 2.2.0**

- File encryption support.
- Add new feature to write the result of encryption/decryption to a file.
- Change function base to class base.

For full changelog, please refers to [Release](https://github.com/RizkyArifNur/strong-cryptor/releases) Page.

## Deprecation

The old `encrypt()` and `decrypt()` function are deprecated, and will be fully removed in version 3.0.0, please use class base instead.

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

For full documentation please refers to [Doc](https://github.com/RizkyArifNur/strong-cryptor/tree/master/doc) folder.

## Basic Encryption

To use **_strong-cryptor_** encryption first import `Encryptor` class from **_strong-cryptor_**

```javascript
import { Encryptor } from 'strong-cryptor'
```

then create a key and new instance of Encryptor class with following parameters

- options - encryption options, see [IEncryptionOptionsClassBase](doc/interfaces/_typings_interface_index_.iencryptionoptionsclassbase.md)

```javascript
import { Encryptor } from 'strong-cryptor'
const key = 'AHBSGTEUET125STSGBDHDJKXMPLKIU12' // store this key in secure place
const encryptor = new Encryptor({ key })
```

then encrypt your data with `encrypt(data)`

```javascript
import { Encryptor } from 'strong-cryptor'
const data = 'your sensitive data'
const key = 'AHBSGTEUET125STSGBDHDJKXMPLKIU12' // store this key in secure place
const encryptor = new Encryptor({ key })
const encryptedData = encryptor.encrypt(data)
```

The code above will use `aes-256-cbc` encryption algorithm and base64 encoding as default encoding.

And to use **_strong-cryptor_** decryption you need import `Decryptor` class from **_strong-cryptor_**

```javascript
import { Decryptor } from 'strong-cryptor'
```

Then create new instance of Encryptor class with following parameters

- options - encryption options, see [IDecryptionOptionsClassBase](doc/interfaces/_typings_interface_index_.idecryptionoptionsclassbase.md)

Full code :

```javascript
import { Encryptor } from 'strong-cryptor'
const data = 'your sensitive data'
const key = 'AHBSGTEUET125STSGBDHDJKXMPLKIU12' // store this key in secure place
const encryptor = new Encryptor({ key })
const encryptedData = encryptor.encrypt(data)
const decryptor = new Decryptor({ key })
decryptor.decrypt(encryptedData)
```

## Using Encryption Count

To make sure your encrypted data is secure, **_strong-cryptor_** providing a new feature called `Encryption Count`, this feature will encrypt your data as many as you want.

To use this feature you only need to fill up the encryption options.

```javascript
import { Encryptor } from 'strong-cryptor'
const data = 'your sensitive data'
const key = 'AHBSGTEUET125STSGBDHDJKXMPLKIU12' // store this key in secure place
const encryptor = new Encryptor({ key, encryptionCount: 5 })
const encryptedData = encryptor.encrypt(data)
const decryptor = new Decryptor({ key, encryptionCount: 5 })
decryptor.decrypt(encryptedData)
```

Or

```javascript
import { Encryptor } from 'strong-cryptor'
const data = 'your sensitive data'
const key = 'AHBSGTEUET125STSGBDHDJKXMPLKIU12' // store this key in secure place
const encryptor = new Encryptor({ key })
const encryptedData = encryptor.encrypt(data, { encryptionCount: 5 })
const decryptor = new Decryptor({ key })
decryptor.decrypt(encryptedData, { encryptionCount: 5 })
```

> Make sure that you provide the encryptionCount at the decryption process too.

## File Encryption

From version 2.2.0 **_strong-cryptor_** support for encrypting a file.

```javascript
import { Encryptor } from 'strong-cryptor'
const key = 'AHBSGTEUET125STSGBDHDJKXMPLKIU12' // store this key in secure place
const encryptor = new Encryptor({ key })
const encryptedData = encryptor.encryptFile('path_to_your_file')
const decryptor = new Decryptor({ key })
decryptor.decryptFile(encryptedData, { toBuffer: true })
```

## Write to File

If you want to write your encryption/decryption result to some file, just fill up `writeToFile` property in encryption/decryption options.

```javascript
import { Encryptor } from 'strong-cryptor'
const data = 'your sensitive data'
const key = 'AHBSGTEUET125STSGBDHDJKXMPLKIU12' // store this key in secure place
const encryptor = new Encryptor({ key })
const encryptedData = encryptor.encrypt(data, { writeToFile: 'path_to_file' })
const decryptor = new Decryptor({ key })
decryptor.decrypt(encryptedData, { writeToFile: 'path_to_file' })
```

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
.
