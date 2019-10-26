[strong-cryptor](../README.md) › [Globals](../globals.md) › ["v2/encryptor"](_v2_encryptor_.md)

# External module: "v2/encryptor"

## Index

### Functions

* [encrypt](_v2_encryptor_.md#encrypt)
* [encryptFile](_v2_encryptor_.md#encryptfile)
* [encryptor](_v2_encryptor_.md#encryptor)

## Functions

###  encrypt

▸ **encrypt**(`data`: string | Buffer, `key`: string, `options`: [IEncryptionOptions](../interfaces/_typings_interface_index_.iencryptionoptions.md)): *string*

*Defined in [v2/encryptor.ts:46](https://github.com/RizkyArifNur/strong-cryptor/blob/2bf2f8d/src/v2/encryptor.ts#L46)*

encrypt the given text with aes-256-cbc encryption algorithm

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`data` | string &#124; Buffer | - | string that will be encrypted |
`key` | string | - | (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data, please store it in the safe places |
`options` | [IEncryptionOptions](../interfaces/_typings_interface_index_.iencryptionoptions.md) |  {} | encryption options, see [IEncryptionOptions](../interfaces/_typings_interface_index_.iencryptionoptions.md) for more details |

**Returns:** *string*

return encrypted string with selected encoding

___

###  encryptFile

▸ **encryptFile**(`pathToFile`: string, `key`: string, `options`: [IEncryptionOptions](../interfaces/_typings_interface_index_.iencryptionoptions.md)): *string*

*Defined in [v2/encryptor.ts:73](https://github.com/RizkyArifNur/strong-cryptor/blob/2bf2f8d/src/v2/encryptor.ts#L73)*

encrypt the given text with aes-256-cbc encryption algorithm

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`pathToFile` | string | - | string of file path |
`key` | string | - | (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data, please store it in the safe places |
`options` | [IEncryptionOptions](../interfaces/_typings_interface_index_.iencryptionoptions.md) |  {} | encryption options, see [IEncryptionOptions](../interfaces/_typings_interface_index_.iencryptionoptions.md) for more details |

**Returns:** *string*

return encrypted string with selected encoding

___

###  encryptor

▸ **encryptor**(`data`: string | Buffer, `key`: string, `encoding`: [Encoding](_typings_index_.md#encoding)): *string*

*Defined in [v2/encryptor.ts:14](https://github.com/RizkyArifNur/strong-cryptor/blob/2bf2f8d/src/v2/encryptor.ts#L14)*

encrypt the given text with aes-256-cbc encryption algorithm

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`data` | string &#124; Buffer | - | string or buffer that will be encrypted |
`key` | string | - | (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data, please store it in the safe places |
`encoding` | [Encoding](_typings_index_.md#encoding) | "base64" | string/text encoding you can choose `base64`(default) or `hex` |

**Returns:** *string*

return encrypted string with selected encoding
