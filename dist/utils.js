"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getIvAndEncryptedDataOnly(encryptedDataWithSeparator, separator) {
    if (separator === void 0) { separator = ':'; }
    /**
     * and get the iv and encrypted data by excluding the separator
     */
    var _a = encryptedDataWithSeparator.split(separator), ivString = _a[0], encryptedDataString = _a[1];
    return {
        encryptedDataString: encryptedDataString,
        ivString: ivString
    };
}
exports.getIvAndEncryptedDataOnly = getIvAndEncryptedDataOnly;
//# sourceMappingURL=utils.js.map