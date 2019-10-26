[strong-cryptor](../README.md) › [Globals](../globals.md) › ["decryptor"](../modules/_decryptor_.md) › [Decryptor](_decryptor_.decryptor.md)

# Class: Decryptor

## Hierarchy

* **Decryptor**

## Index

### Constructors

* [constructor](_decryptor_.decryptor.md#constructor)

### Properties

* [options](_decryptor_.decryptor.md#private-options)

### Methods

* [bufferDecryptor](_decryptor_.decryptor.md#private-bufferdecryptor)
* [decrypt](_decryptor_.decryptor.md#decrypt)
* [decryptFile](_decryptor_.decryptor.md#decryptfile)
* [setKey](_decryptor_.decryptor.md#setkey)
* [setOptions](_decryptor_.decryptor.md#setoptions)
* [stringDecryptor](_decryptor_.decryptor.md#private-stringdecryptor)

## Constructors

###  constructor

\+ **new Decryptor**(`options`: [IDecryptionOptionsClassBase](../interfaces/_typings_interface_index_.idecryptionoptionsclassbase.md)): *[Decryptor](_decryptor_.decryptor.md)*

*Defined in [decryptor.ts:10](https://github.com/RizkyArifNur/strong-cryptor/blob/0b692aa/src/decryptor.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IDecryptionOptionsClassBase](../interfaces/_typings_interface_index_.idecryptionoptionsclassbase.md) |

**Returns:** *[Decryptor](_decryptor_.decryptor.md)*

## Properties

### `Private` options

• **options**: *[IDecryptionOptionsClassBase](../interfaces/_typings_interface_index_.idecryptionoptionsclassbase.md)*

*Defined in [decryptor.ts:10](https://github.com/RizkyArifNur/strong-cryptor/blob/0b692aa/src/decryptor.ts#L10)*

## Methods

### `Private` bufferDecryptor

▸ **bufferDecryptor**(`encryptedData`: string, `key`: string, `encoding`: [Encoding](../modules/_typings_index_.md#encoding)): *Buffer*

*Defined in [decryptor.ts:163](https://github.com/RizkyArifNur/strong-cryptor/blob/0b692aa/src/decryptor.ts#L163)*

decrypt the encrypted data from strong-cryptor to Buffer

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`encryptedData` | string | - | encrypted string |
`key` | string | - | (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data (must be same with the encryption process), please store it in the safe places |
`encoding` | [Encoding](../modules/_typings_index_.md#encoding) | "base64" | string/text encoding you can choose `base64`(default) or `hex` (must be same with the encryption process) |

**Returns:** *Buffer*

return decrypted data as a Buffer

___

###  decrypt

▸ **decrypt**<**T**>(`encryptedString`: string, `options`: Partial‹T› & Partial‹[IDecryptionOptionsClassBase](../interfaces/_typings_interface_index_.idecryptionoptionsclassbase.md)›): *[BufferAndString](../modules/_typings_index_.md#bufferandstring)‹T›*

*Defined in [decryptor.ts:43](https://github.com/RizkyArifNur/strong-cryptor/blob/0b692aa/src/decryptor.ts#L43)*

decrypt the encrypted data from strong-cryptor

**Type parameters:**

▪ **T**: *Required‹[IToBufferOptions](../interfaces/_typings_interface_index_.itobufferoptions.md)›*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`encryptedString` | string | - | - |
`options` | Partial‹T› & Partial‹[IDecryptionOptionsClassBase](../interfaces/_typings_interface_index_.idecryptionoptionsclassbase.md)› |  this.options as T & IDecryptionOptionsClassBase | decryption options, see [IDecryptionOptionsClassBase](../interfaces/_typings_interface_index_.idecryptionoptionsclassbase.md) for more details |

**Returns:** *[BufferAndString](../modules/_typings_index_.md#bufferandstring)‹T›*

return decrypted string/Buffer

___

###  decryptFile

▸ **decryptFile**<**T**>(`filePath`: string, `options`: Partial‹T› & Partial‹[IDecryptionOptionsClassBase](../interfaces/_typings_interface_index_.idecryptionoptionsclassbase.md)›): *[BufferAndString](../modules/_typings_index_.md#bufferandstring)‹T›*

*Defined in [decryptor.ts:87](https://github.com/RizkyArifNur/strong-cryptor/blob/0b692aa/src/decryptor.ts#L87)*

decrypt file that already encrypted from strong-cryptor

**Type parameters:**

▪ **T**: *Required‹[IToBufferOptions](../interfaces/_typings_interface_index_.itobufferoptions.md)›*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`filePath` | string | - | path to file |
`options` | Partial‹T› & Partial‹[IDecryptionOptionsClassBase](../interfaces/_typings_interface_index_.idecryptionoptionsclassbase.md)› |  this.options as T & IDecryptionOptionsClassBase | decryption options, see [IDecryptionOptionsClassBase](../interfaces/_typings_interface_index_.idecryptionoptionsclassbase.md) for more details |

**Returns:** *[BufferAndString](../modules/_typings_index_.md#bufferandstring)‹T›*

return decrypted string/Buffer

___

###  setKey

▸ **setKey**(`key`: string): *void*

*Defined in [decryptor.ts:22](https://github.com/RizkyArifNur/strong-cryptor/blob/0b692aa/src/decryptor.ts#L22)*

set key for decryption process

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data, please store it in the safe places  |

**Returns:** *void*

___

###  setOptions

▸ **setOptions**(`options`: Partial‹[IDecryptionOptionsClassBase](../interfaces/_typings_interface_index_.idecryptionoptionsclassbase.md)›): *void*

*Defined in [decryptor.ts:33](https://github.com/RizkyArifNur/strong-cryptor/blob/0b692aa/src/decryptor.ts#L33)*

set options for decryption process

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | Partial‹[IDecryptionOptionsClassBase](../interfaces/_typings_interface_index_.idecryptionoptionsclassbase.md)› | (decryption options, see [IDecryptionOptionsClassBase](../interfaces/_typings_interface_index_.idecryptionoptionsclassbase.md) for more details  |

**Returns:** *void*

___

### `Private` stringDecryptor

▸ **stringDecryptor**(`encryptedData`: string, `key`: string, `encoding`: [Encoding](../modules/_typings_index_.md#encoding)): *string*

*Defined in [decryptor.ts:132](https://github.com/RizkyArifNur/strong-cryptor/blob/0b692aa/src/decryptor.ts#L132)*

decrypt the encrypted data from strong-cryptor to string

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`encryptedData` | string | - | encrypted string |
`key` | string | - | (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data (must be same with the encryption process), please store it in the safe places |
`encoding` | [Encoding](../modules/_typings_index_.md#encoding) | "base64" | string/text encoding you can choose `base64`(default) or `hex` (must be same with the encryption process) |

**Returns:** *string*

return decrypted string
