import { Encoding } from './typings';
/**
 * encrypt the given text with aes-256-cbc encryption algorithm
 * @param text string that will be encrypted
 * @param key (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data, please store it in the safe places
 * @param encoding string/text encoding you can choose `base64`(default) or `hex`
 * @param separator `(optional)` this value used to separate the iv and the encrypted data, `default = :` (colon) don't using a valid `hex` and `base64` value for the separator!!
 */
export declare function encrypt(text: string, key: string, encoding?: Encoding, separator?: string): string;
