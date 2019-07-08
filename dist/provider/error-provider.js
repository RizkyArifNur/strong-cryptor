"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorProvider = /** @class */ (function () {
    function ErrorProvider() {
        this.name = 'StrongCryptorErr';
        Error.captureStackTrace(this, ErrorProvider);
    }
    return ErrorProvider;
}());
exports.ErrorProvider = ErrorProvider;
var MalformatedError = /** @class */ (function (_super) {
    __extends(MalformatedError, _super);
    function MalformatedError(message) {
        var _this = _super.call(this) || this;
        _this.code = 'MALFORMATED';
        _this.message = message;
        return _this;
    }
    return MalformatedError;
}(ErrorProvider));
exports.MalformatedError = MalformatedError;
var InvaliSeparatorError = /** @class */ (function (_super) {
    __extends(InvaliSeparatorError, _super);
    function InvaliSeparatorError(message) {
        var _this = _super.call(this) || this;
        _this.code = 'INVALID_SEPARATOR';
        _this.message = message;
        return _this;
    }
    return InvaliSeparatorError;
}(ErrorProvider));
exports.InvaliSeparatorError = InvaliSeparatorError;
var InvalidKeyError = /** @class */ (function (_super) {
    __extends(InvalidKeyError, _super);
    function InvalidKeyError(message) {
        var _this = _super.call(this) || this;
        _this.code = 'INVALID_KEY';
        _this.message = message;
        return _this;
    }
    return InvalidKeyError;
}(ErrorProvider));
exports.InvalidKeyError = InvalidKeyError;
//# sourceMappingURL=error-provider.js.map