[strong-cryptor](../README.md) › [Globals](../globals.md) › ["typings/interface/index"](../modules/_typings_interface_index_.md) › [IEncryptionOptionsClassBase](_typings_interface_index_.iencryptionoptionsclassbase.md)

# Interface: IEncryptionOptionsClassBase

options that wil be used in encryption process in new Class Base Model

## Hierarchy

* [IEncryptionOptions](_typings_interface_index_.iencryptionoptions.md)

  ↳ **IEncryptionOptionsClassBase**

## Index

### Properties

* [encoding](_typings_interface_index_.iencryptionoptionsclassbase.md#optional-encoding)
* [encryptionCount](_typings_interface_index_.iencryptionoptionsclassbase.md#optional-encryptioncount)
* [key](_typings_interface_index_.iencryptionoptionsclassbase.md#key)
* [writeToFile](_typings_interface_index_.iencryptionoptionsclassbase.md#optional-writetofile)

## Properties

### `Optional` encoding

• **encoding**? : *[Encoding](../modules/_typings_index_.md#encoding)*

*Inherited from [IEncryptionOptions](_typings_interface_index_.iencryptionoptions.md).[encoding](_typings_interface_index_.iencryptionoptions.md#optional-encoding)*

*Defined in [typings/interface/index.ts:19](https://github.com/RizkyArifNur/strong-cryptor/blob/0b692aa/src/typings/interface/index.ts#L19)*

**`encoding`** `base64` or `hex` encoding that will be used for encryption process

___

### `Optional` encryptionCount

• **encryptionCount**? : *undefined | number*

*Inherited from [IEncryptionOptions](_typings_interface_index_.iencryptionoptions.md).[encryptionCount](_typings_interface_index_.iencryptionoptions.md#optional-encryptioncount)*

*Defined in [typings/interface/index.ts:15](https://github.com/RizkyArifNur/strong-cryptor/blob/0b692aa/src/typings/interface/index.ts#L15)*

**`encryptioncount`** number that represent how many encryption will be executed

___

###  key

• **key**: *string*

*Defined in [typings/interface/index.ts:62](https://github.com/RizkyArifNur/strong-cryptor/blob/0b692aa/src/typings/interface/index.ts#L62)*

**`key`** 256bits (32 charcters) string that used to encrypt dan decrypt the data (must be same with the encryption process), please store it in the safe places

___

### `Optional` writeToFile

• **writeToFile**? : *undefined | string*

*Inherited from [IEncryptionOptions](_typings_interface_index_.iencryptionoptions.md).[writeToFile](_typings_interface_index_.iencryptionoptions.md#optional-writetofile)*

*Defined in [typings/interface/index.ts:24](https://github.com/RizkyArifNur/strong-cryptor/blob/0b692aa/src/typings/interface/index.ts#L24)*

file path to write the result of encryption
