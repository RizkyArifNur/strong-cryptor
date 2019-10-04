[strong-cryptor](../README.md) › [Globals](../globals.md) › ["encryptor"](_encryptor_.md)

# External module: "encryptor"

## Index

### Functions

* [encrypt](_encryptor_.md#encrypt)
* [encryptor](_encryptor_.md#encryptor)

## Functions

###  encrypt

▸ **encrypt**(`text`: string, `key`: string, `options`: [IEncryptionOptions](../interfaces/_typings_interface_index_.iencryptionoptions.md)): *string*

*Defined in [encryptor.ts:45](https://github.com/RizkyArifNur/strong-cryptor/blob/6f3177b/src/encryptor.ts#L45)*

encrypt the given text with aes-256-cbc encryption algorithm

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`text` | string | - | string that will be encrypted |
`key` | string | - | (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data, please store it in the safe places |
`options` | [IEncryptionOptions](../interfaces/_typings_interface_index_.iencryptionoptions.md) |  {} | encryption options, see [IEncryptionOptions](../interfaces/_typings_interface_index_.iencryptionoptions.md) for more details |

**Returns:** *string*

return encrypted string with selected encoding

___

###  encryptor

▸ **encryptor**(`text`: string, `key`: string, `encoding`: [Encoding](_typings_index_.md#encoding)): *string*

*Defined in [encryptor.ts:13](https://github.com/RizkyArifNur/strong-cryptor/blob/6f3177b/src/encryptor.ts#L13)*

encrypt the given text with aes-256-cbc encryption algorithm

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`text` | string | - | string that will be encrypted |
`key` | string | - | (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data, please store it in the safe places |
`encoding` | [Encoding](_typings_index_.md#encoding) | "base64" | string/text encoding you can choose `base64`(default) or `hex` |

**Returns:** *string*

return encrypted string with selected encoding
