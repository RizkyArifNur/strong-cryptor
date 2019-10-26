[strong-cryptor](../README.md) › [Globals](../globals.md) › ["v2/decryptor"](_v2_decryptor_.md)

# External module: "v2/decryptor"

## Index

### Functions

* [bufferDecryptor](_v2_decryptor_.md#bufferdecryptor)
* [decrypt](_v2_decryptor_.md#decrypt)
* [decryptFile](_v2_decryptor_.md#decryptfile)
* [stringDecryptor](_v2_decryptor_.md#stringdecryptor)

## Functions

###  bufferDecryptor

▸ **bufferDecryptor**(`encryptedData`: string, `key`: string, `encoding`: [Encoding](_typings_index_.md#encoding)): *Buffer*

*Defined in [v2/decryptor.ts:46](https://github.com/RizkyArifNur/strong-cryptor/blob/2bf2f8d/src/v2/decryptor.ts#L46)*

decrypt the encrypted data from strong-cryptor to Buffer

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`encryptedData` | string | - | encrypted string |
`key` | string | - | (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data (must be same with the encryption process), please store it in the safe places |
`encoding` | [Encoding](_typings_index_.md#encoding) | "base64" | string/text encoding you can choose `base64`(default) or `hex` (must be same with the encryption process) |

**Returns:** *Buffer*

return decrypted data as a Buffer

___

###  decrypt

▸ **decrypt**<**T**>(`encryptedString`: string, `key`: string, `options`: T & [IDecryptionOptions](../interfaces/_typings_interface_index_.idecryptionoptions.md)): *[BufferAndString](_typings_index_.md#bufferandstring)‹T›*

*Defined in [v2/decryptor.ts:76](https://github.com/RizkyArifNur/strong-cryptor/blob/2bf2f8d/src/v2/decryptor.ts#L76)*

decrypt the encrypted data from strong-cryptor

**Type parameters:**

▪ **T**: *[IToBufferOptions](../interfaces/_typings_interface_index_.itobufferoptions.md)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`encryptedString` | string | - | - |
`key` | string | - | (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data (must be same with the encryption process), please store it in the safe places |
`options` | T & [IDecryptionOptions](../interfaces/_typings_interface_index_.idecryptionoptions.md) |  {} as T | decryption options, see [IDecryptionOptions](../interfaces/_typings_interface_index_.idecryptionoptions.md) for more details |

**Returns:** *[BufferAndString](_typings_index_.md#bufferandstring)‹T›*

return decrypted string/Buffer

___

###  decryptFile

▸ **decryptFile**<**T**>(`filePath`: string, `key`: string, `options`: Partial‹T› & [IDecryptionOptions](../interfaces/_typings_interface_index_.idecryptionoptions.md)): *[BufferAndString](_typings_index_.md#bufferandstring)‹T›*

*Defined in [v2/decryptor.ts:116](https://github.com/RizkyArifNur/strong-cryptor/blob/2bf2f8d/src/v2/decryptor.ts#L116)*

decrypt file that already encrypted from strong-cryptor

**Type parameters:**

▪ **T**: *Required‹[IToBufferOptions](../interfaces/_typings_interface_index_.itobufferoptions.md)›*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`filePath` | string | - | path to file |
`key` | string | - | (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data (must be same with the encryption process), please store it in the safe places |
`options` | Partial‹T› & [IDecryptionOptions](../interfaces/_typings_interface_index_.idecryptionoptions.md) |  {} as T | decryption options, see [IDecryptionOptions](../interfaces/_typings_interface_index_.idecryptionoptions.md) for more details |

**Returns:** *[BufferAndString](_typings_index_.md#bufferandstring)‹T›*

return decrypted string/Buffer

___

###  stringDecryptor

▸ **stringDecryptor**(`encryptedData`: string, `key`: string, `encoding`: [Encoding](_typings_index_.md#encoding)): *string*

*Defined in [v2/decryptor.ts:15](https://github.com/RizkyArifNur/strong-cryptor/blob/2bf2f8d/src/v2/decryptor.ts#L15)*

decrypt the encrypted data from strong-cryptor to string

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`encryptedData` | string | - | encrypted string |
`key` | string | - | (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data (must be same with the encryption process), please store it in the safe places |
`encoding` | [Encoding](_typings_index_.md#encoding) | "base64" | string/text encoding you can choose `base64`(default) or `hex` (must be same with the encryption process) |

**Returns:** *string*

return decrypted string
