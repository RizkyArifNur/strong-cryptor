[strong-cryptor](../README.md) › [Globals](../globals.md) › ["utils"](_utils_.md)

# External module: "utils"

## Index

### Functions

* [genKey](_utils_.md#genkey)
* [getIvAndEncryptedDataOnly](_utils_.md#getivandencrypteddataonly)
* [removeBase64Padding](_utils_.md#removebase64padding)

## Functions

###  genKey

▸ **genKey**(): *string*

*Defined in [utils.ts:38](https://github.com/RizkyArifNur/strong-cryptor/blob/6f3177b/src/utils.ts#L38)*

generate random 256bits(32 characters) key

**Returns:** *string*

return a 32 characters string

___

###  getIvAndEncryptedDataOnly

▸ **getIvAndEncryptedDataOnly**(`encryptedData`: string, `encoding`: [Encoding](_typings_index_.md#encoding)): *[IIvAndEncryptedData](../interfaces/_typings_interface_index_.iivandencrypteddata.md)*

*Defined in [utils.ts:10](https://github.com/RizkyArifNur/strong-cryptor/blob/6f3177b/src/utils.ts#L10)*

separate the ivString with the encrypted data string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`encryptedData` | string | encrypted data that will be separated |
`encoding` | [Encoding](_typings_index_.md#encoding) | the encoding that used in the encryption process |

**Returns:** *[IIvAndEncryptedData](../interfaces/_typings_interface_index_.iivandencrypteddata.md)*

object that contains the ivString and encrypted data string

___

###  removeBase64Padding

▸ **removeBase64Padding**(`encodedString`: string): *string*

*Defined in [utils.ts:30](https://github.com/RizkyArifNur/strong-cryptor/blob/6f3177b/src/utils.ts#L30)*

remove padding( `=` | equals sign) for string that encoded with base64

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`encodedString` | string | base64 string that the padding will be removed |

**Returns:** *string*

base64 string that the padding already removed
