//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const secretHandshake = (pHandshake) => {
  if (typeof pHandshake !== 'number') {
    throw new Error('Handshake must be a number');
  }

  let binaryHandshake = pHandshake.toString(2);

  let handshake = [];
  let lengthHandshake = binaryHandshake.length;

  switch (lengthHandshake) {
    case 5:
    case 4: binaryHandshake[lengthHandshake-4] === '1' ? handshake.push('jump') : null;
    case 3: binaryHandshake[lengthHandshake-3] === '1' ? handshake.push('close your eyes') : null;
    case 2: binaryHandshake[lengthHandshake-2] === '1' ? handshake.push('double blink') : null;
    case 1: binaryHandshake[lengthHandshake-1] === '1' ? handshake.push('wink') : null;
      break;
    default:
      break;
  }
  if (lengthHandshake < 5) { handshake = handshake.reverse() };

  return handshake;
};
