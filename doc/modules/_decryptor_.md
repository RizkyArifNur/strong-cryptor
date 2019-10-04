[strong-cryptor](../README.md) › [Globals](../globals.md) › ["decryptor"](_decryptor_.md)

# External module: "decryptor"

## Index

### Functions

* [decrypt](_decryptor_.md#decrypt)
* [decryptor](_decryptor_.md#decryptor)

## Functions

###  decrypt

▸ **decrypt**(`encryptedString`: string, `key`: string, `options`: [IDecryptionOptions](../interfaces/_typings_interface_index_.idecryptionoptions.md)): *string*

*Defined in [decryptor.ts:44](https://github.com/RizkyArifNur/strong-cryptor/blob/6f3177b/src/decryptor.ts#L44)*

decrypt the encrypted data from strong-cryptor

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`encryptedString` | string | - | - |
`key` | string | - | (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data (must be same with the encryption process), please store it in the safe places |
`options` | [IDecryptionOptions](../interfaces/_typings_interface_index_.idecryptionoptions.md) |  {} | decryption options, see [IDecryptionOptions](../interfaces/_typings_interface_index_.idecryptionoptions.md) for more details |

**Returns:** *string*

return decrypted string

___

###  decryptor

▸ **decryptor**(`encryptedData`: string, `key`: string, `encoding`: [Encoding](_typings_index_.md#encoding)): *string*

*Defined in [decryptor.ts:14](https://github.com/RizkyArifNur/strong-cryptor/blob/6f3177b/src/decryptor.ts#L14)*

decrypt the encrypted data from strong-cryptor

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`encryptedData` | string | - | encrypted string |
`key` | string | - | (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data (must be same with the encryption process), please store it in the safe places |
`encoding` | [Encoding](_typings_index_.md#encoding) | "base64" | string/text encoding you can choose `base64`(default) or `hex` (must be same with the encryption process) |

**Returns:** *string*

return decrypted string
