[strong-cryptor](../README.md) › [Globals](../globals.md) › ["encryptor"](../modules/_encryptor_.md) › [Encryptor](_encryptor_.encryptor.md)

# Class: Encryptor

## Hierarchy

* **Encryptor**

## Index

### Constructors

* [constructor](_encryptor_.encryptor.md#constructor)

### Properties

* [options](_encryptor_.encryptor.md#private-options)

### Methods

* [encrypt](_encryptor_.encryptor.md#encrypt)
* [encryptFile](_encryptor_.encryptor.md#encryptfile)
* [encryptor](_encryptor_.encryptor.md#private-encryptor)
* [setKey](_encryptor_.encryptor.md#setkey)
* [setOptions](_encryptor_.encryptor.md#setoptions)

## Constructors

###  constructor

\+ **new Encryptor**(`options`: [IEncryptionOptionsClassBase](../interfaces/_typings_interface_index_.iencryptionoptionsclassbase.md)): *[Encryptor](_encryptor_.encryptor.md)*

*Defined in [encryptor.ts:8](https://github.com/RizkyArifNur/strong-cryptor/blob/2bf2f8d/src/encryptor.ts#L8)*

Create new instance of encryptor

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [IEncryptionOptionsClassBase](../interfaces/_typings_interface_index_.iencryptionoptionsclassbase.md) | (encryption options, see [IEncryptionOptions](../interfaces/_typings_interface_index_.iencryptionoptions.md) for more details  |

**Returns:** *[Encryptor](_encryptor_.encryptor.md)*

## Properties

### `Private` options

• **options**: *[IEncryptionOptionsClassBase](../interfaces/_typings_interface_index_.iencryptionoptionsclassbase.md)*

*Defined in [encryptor.ts:8](https://github.com/RizkyArifNur/strong-cryptor/blob/2bf2f8d/src/encryptor.ts#L8)*

## Methods

###  encrypt

▸ **encrypt**(`data`: string | Buffer, `options`: Partial‹[IEncryptionOptionsClassBase](../interfaces/_typings_interface_index_.iencryptionoptionsclassbase.md)›): *string*

*Defined in [encryptor.ts:48](https://github.com/RizkyArifNur/strong-cryptor/blob/2bf2f8d/src/encryptor.ts#L48)*

encrypt the given text with aes-256-cbc encryption algorithm

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`data` | string &#124; Buffer | - | string or Buffer that will be encrypted |
`options` | Partial‹[IEncryptionOptionsClassBase](../interfaces/_typings_interface_index_.iencryptionoptionsclassbase.md)› |  this.options | encryption options, see [IEncryptionOptions](../interfaces/_typings_interface_index_.iencryptionoptions.md) for more details |

**Returns:** *string*

return encrypted string with selected encoding

___

###  encryptFile

▸ **encryptFile**(`pathToFile`: string, `options`: Partial‹[IEncryptionOptionsClassBase](../interfaces/_typings_interface_index_.iencryptionoptionsclassbase.md)›): *string*

*Defined in [encryptor.ts:76](https://github.com/RizkyArifNur/strong-cryptor/blob/2bf2f8d/src/encryptor.ts#L76)*

encrypt the given text with aes-256-cbc encryption algorithm

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`pathToFile` | string | - | string of file path |
`options` | Partial‹[IEncryptionOptionsClassBase](../interfaces/_typings_interface_index_.iencryptionoptionsclassbase.md)› |  this.options | encryption options, see [IEncryptionOptions](../interfaces/_typings_interface_index_.iencryptionoptions.md) for more details |

**Returns:** *string*

return encrypted string with selected encoding

___

### `Private` encryptor

▸ **encryptor**(`data`: string | Buffer, `key`: string, `encoding`: [Encoding](../modules/_typings_index_.md#encoding)): *string*

*Defined in [encryptor.ts:106](https://github.com/RizkyArifNur/strong-cryptor/blob/2bf2f8d/src/encryptor.ts#L106)*

encrypt the given text with aes-256-cbc encryption algorithm

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`data` | string &#124; Buffer | - | string or buffer that will be encrypted |
`key` | string | - | (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data, please store it in the safe places |
`encoding` | [Encoding](../modules/_typings_index_.md#encoding) | "base64" | string/text encoding you can choose `base64`(default) or `hex` |

**Returns:** *string*

return encrypted string with selected encoding

___

###  setKey

▸ **setKey**(`key`: string): *void*

*Defined in [encryptor.ts:26](https://github.com/RizkyArifNur/strong-cryptor/blob/2bf2f8d/src/encryptor.ts#L26)*

set key for encryption process

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data, please store it in the safe places  |

**Returns:** *void*

___

###  setOptions

▸ **setOptions**(`options`: Partial‹[IEncryptionOptionsClassBase](../interfaces/_typings_interface_index_.iencryptionoptionsclassbase.md)›): *void*

*Defined in [encryptor.ts:37](https://github.com/RizkyArifNur/strong-cryptor/blob/2bf2f8d/src/encryptor.ts#L37)*

set options for encryption process

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | Partial‹[IEncryptionOptionsClassBase](../interfaces/_typings_interface_index_.iencryptionoptionsclassbase.md)› | (encryption options, see [IEncryptionOptions](../interfaces/_typings_interface_index_.iencryptionoptions.md) for more details  |

**Returns:** *void*
