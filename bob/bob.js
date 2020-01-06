/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (pMessage) => {
  message = pMessage.trim();

  let isQuestion = (message) => {
    return message[message.length-1] === '?';
  };

  let isShouting = (message) => {
    return message.toUpperCase() === message && message.toLowerCase() !== message;
  }

  return isShouting(message) ? 
    isQuestion(message) ?
      "Calm down, I know what I'm doing!" :
      "Whoa, chill out!" :
      isQuestion(message) ?
        "Sure." :
        message.length === 0 ?
        "Fine. Be that way!" :
        "Whatever."
};
