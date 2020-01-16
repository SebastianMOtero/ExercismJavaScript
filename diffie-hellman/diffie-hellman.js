//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0 ) { return false; }
  }
  return true;
}

export class DiffieHellman {
  constructor(p, g) {
    if (p < 2 || g < 2) { throw new Error('arguments are out of range'); }
    if (!(isPrime(p) && isPrime(g)) ) { throw new Error('arguments are not prime'); }
    this.p = p;
    this.g = g;
  }

  getPublicKeyFromPrivateKey(privateKey) {
    if (privateKey < 2) { throw new Error('private key invalid'); }
    if (privateKey >= this.p) { throw new Error('private key invalid'); } 
    return Math.pow(this.g, privateKey) % (this.p);
  }

  getSharedSecret(privateKey, publicKey) {
    return Math.pow(publicKey, privateKey) % this.p;
  }
}
