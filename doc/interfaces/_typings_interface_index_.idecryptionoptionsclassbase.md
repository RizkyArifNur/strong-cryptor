[strong-cryptor](../README.md) › [Globals](../globals.md) › ["typings/interface/index"](../modules/_typings_interface_index_.md) › [IDecryptionOptionsClassBase](_typings_interface_index_.idecryptionoptionsclassbase.md)

# Interface: IDecryptionOptionsClassBase

options that wil be used in decryption process in new Class Base Model

## Hierarchy

* [IDecryptionOptions](_typings_interface_index_.idecryptionoptions.md)

* [IToBufferOptions](_typings_interface_index_.itobufferoptions.md)

  ↳ **IDecryptionOptionsClassBase**

## Index

### Properties

* [encoding](_typings_interface_index_.idecryptionoptionsclassbase.md#optional-encoding)
* [encryptionCount](_typings_interface_index_.idecryptionoptionsclassbase.md#optional-encryptioncount)
* [key](_typings_interface_index_.idecryptionoptionsclassbase.md#key)
* [toBuffer](_typings_interface_index_.idecryptionoptionsclassbase.md#optional-tobuffer)
* [writeToFile](_typings_interface_index_.idecryptionoptionsclassbase.md#optional-writetofile)

## Properties

### `Optional` encoding

• **encoding**? : *[Encoding](../modules/_typings_index_.md#encoding)*

*Inherited from [IDecryptionOptions](_typings_interface_index_.idecryptionoptions.md).[encoding](_typings_interface_index_.idecryptionoptions.md#optional-encoding)*

*Defined in [typings/interface/index.ts:38](https://github.com/RizkyArifNur/strong-cryptor/blob/2bf2f8d/src/typings/interface/index.ts#L38)*

**`encoding`** `base64` or `hex` encoding that will be used for decryption process

___

### `Optional` encryptionCount

• **encryptionCount**? : *undefined | number*

*Inherited from [IDecryptionOptions](_typings_interface_index_.idecryptionoptions.md).[encryptionCount](_typings_interface_index_.idecryptionoptions.md#optional-encryptioncount)*

*Defined in [typings/interface/index.ts:34](https://github.com/RizkyArifNur/strong-cryptor/blob/2bf2f8d/src/typings/interface/index.ts#L34)*

**`encryptioncount`** number that represent how many decryption will be executed

___

###  key

• **key**: *string*

*Defined in [typings/interface/index.ts:65](https://github.com/RizkyArifNur/strong-cryptor/blob/2bf2f8d/src/typings/interface/index.ts#L65)*

___

### `Optional` toBuffer

• **toBuffer**? : *undefined | false | true*

*Inherited from [IToBufferOptions](_typings_interface_index_.itobufferoptions.md).[toBuffer](_typings_interface_index_.itobufferoptions.md#optional-tobuffer)*

*Defined in [typings/interface/index.ts:52](https://github.com/RizkyArifNur/strong-cryptor/blob/2bf2f8d/src/typings/interface/index.ts#L52)*

return buffer instead of string, use this if you're encrypting a buffer/file

___

### `Optional` writeToFile

• **writeToFile**? : *undefined | string*

*Inherited from [IDecryptionOptions](_typings_interface_index_.idecryptionoptions.md).[writeToFile](_typings_interface_index_.idecryptionoptions.md#optional-writetofile)*

*Defined in [typings/interface/index.ts:43](https://github.com/RizkyArifNur/strong-cryptor/blob/2bf2f8d/src/typings/interface/index.ts#L43)*

file path to write the result of decryption
