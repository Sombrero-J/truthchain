import { blake2bHex } from 'blakejs';

export const textToHash = '';
const hash = blake2bHex(new TextEncoder().encode(textToHash));

console.log(hash);