import { ErrorCode } from '../typings';
export declare class ErrorProvider {
    code: ErrorCode;
    message: string;
    name: string;
    constructor();
}
export declare class MalformatedError extends ErrorProvider {
    constructor(message: string);
}
export declare class InvaliSeparatorError extends ErrorProvider {
    constructor(message: string);
}
export declare class InvalidKeyError extends ErrorProvider {
    constructor(message: string);
}
