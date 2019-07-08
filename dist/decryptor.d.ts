import { Encoding } from './typings';
/**
 * decrypt the encrypted data from strong-cryptor
 * @param encryptedData encrypted string
 * @param key (or secret) is 256bits (32 charcters) that used to encrypt dan decrypt the data (must be same with the encryption process), please store it in the safe places
 * @param encoding string/text encoding you can choose `base64`(default) or `hex` (must be same with the encryption process)
 * @param separator `(optional)` this value used to separate the iv and the encrypted data (must be same with the encryption process), `default = :` (colon) don't using a valid `hex` and `base64` value for the separator!!
 */
export declare function decrypt(encryptedData: string, key: string, encoding?: Encoding, separator?: string): string;
