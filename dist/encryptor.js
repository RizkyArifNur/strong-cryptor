"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
var config_1 = require("./config");
var provider_1 = require("./provider");
var regex_1 = require("./regex");
/**
 * encrypt the given text with aes-256-cbc encryption algorithm
 * @param text string that will be encrypted
 * @param key (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data, please store it in the safe places
 * @param encoding string/text encoding you can choose `base64`(default) or `hex`
 * @param separator `(optional)` this value used to separate the iv and the encrypted data, `default = :` (colon) don't using a valid `hex` and `base64` value for the separator!!
 */
function encrypt(text, key, encoding, separator) {
    if (encoding === void 0) { encoding = 'base64'; }
    if (separator === void 0) { separator = ':'; }
    if (key.length !== 32) {
        throw new provider_1.InvalidKeyError('Key must be 32 characters');
    }
    if (separator.length !== 1) {
        throw new provider_1.InvaliSeparatorError('Separator must be one character');
    }
    if (encoding === 'hex' && regex_1.hexRegex.test(separator)) {
        throw new provider_1.InvaliSeparatorError('Please input separator that exclude the hexadecimal value');
    }
    else if (encoding === 'base64' && regex_1.base64RegexValidSeparator.test(separator)) {
        throw new provider_1.InvaliSeparatorError('Please input separator that exclude the base64 value');
    }
    /**
     * this expression will create a random Initialization Vector(IV)
     * for every encrypted data
     */
    var iv = crypto_1.default.randomBytes(config_1.IV_LENGTH);
    var cipher = crypto_1.default.createCipheriv(config_1.ALGORITHM, Buffer.from(key), iv);
    var encryptedData = cipher.update(text);
    encryptedData = Buffer.concat([encryptedData, cipher.final()]);
    /**
     * combine iv to returned encrypted data, and add the separator to distinguish the (IV)
     * data and the encrypted data,
     * and add separator to the end of data, this for decrypt purpose
     */
    return iv.toString(encoding) + separator + encryptedData.toString(encoding);
    /**
     * the result of this function will be like this [IV][Separator][EncryptedData]
     */
}
exports.encrypt = encrypt;
//# sourceMappingURL=encryptor.js.map