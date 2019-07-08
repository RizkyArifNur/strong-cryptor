"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
var config_1 = require("./config");
var provider_1 = require("./provider/");
var regex_1 = require("./regex");
var utils_1 = require("./utils");
/**
 * decrypt the encrypted data from strong-cryptor
 * @param encryptedData encrypted string
 * @param key (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data (must be same with the encryption process), please store it in the safe places
 * @param encoding string/text encoding you can choose `base64`(default) or `hex` (must be same with the encryption process)
 * @param separator `(optional)` this value used to separate the iv and the encrypted data (must be same with the encryption process), `default = :` (colon) don't using a valid `hex` and `base64` value for the separator!!
 */
function decrypt(encryptedData, key, encoding, separator) {
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
    var _a = utils_1.getIvAndEncryptedDataOnly(encryptedData, separator), ivString = _a.ivString, encryptedDataString = _a.encryptedDataString;
    if (encoding === 'base64' && !regex_1.base64Regex.test(ivString)) {
        throw new provider_1.MalformatedError('Encrypted data malformated');
    }
    else if (encoding === 'hex' && !regex_1.hexRegex.test(ivString)) {
        throw new provider_1.MalformatedError('Encrypted data malformated');
    }
    try {
        var iv = Buffer.from(ivString, encoding);
        var encryptedText = Buffer.from(encryptedDataString, encoding);
        var decipher = crypto_1.default.createDecipheriv(config_1.ALGORITHM, Buffer.from(key), iv);
        var decrypted = decipher.update(encryptedText);
        var decriptedString = decrypted.toString() + decipher.final().toString();
        return decriptedString;
    }
    catch (error) {
        throw new provider_1.MalformatedError('Encrypted data malformated');
    }
}
exports.decrypt = decrypt;
//# sourceMappingURL=decryptor.js.map