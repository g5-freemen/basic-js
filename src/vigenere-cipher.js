const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(modeDirect = true){
    this.modeDirect = modeDirect;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  };

  coder(message,key,offset) {
    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      if (/^[A-Z]$/.test(message[i])) {
        const letterIndex = (message.charCodeAt(i) + key.charCodeAt(j % key.length)*(offset>0 ? -1:1) + offset ) % 26;
        result += this.alphabet.charAt(letterIndex);
        j++;
      } else result += message[i];
    }

    return result;
  }

  encrypt(message, key) {
    if (!message || !key ) throw new Error('Arguments error');

    this.final = this.coder(message,key,-130);

    return this.modeDirect ? this.final : this.final.split('').reverse().join('');
}


decrypt(message, key) {
  if (!message || !key ) throw new Error('Arguments error');

  this.final = this.coder(message,key,104);

  return this.modeDirect ? this.final : this.final.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
