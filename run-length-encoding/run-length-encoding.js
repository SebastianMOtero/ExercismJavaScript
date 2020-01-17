//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (text) => {
  let sn = [];
  if (text === '') { return ''} 
  let current = [ text[0] ];
  for (let i = 1; i < text.length; i++) {
    if (text[i] !== current[0]) {
      sn.push(current.length);
      sn.push(current[0]);
      current = [ text[i] ];
    } else {
      current.push(1);
    }
  }
  sn.push(current.length);
  sn.push(current[0]);

  return sn.filter(x => x !== 1).join("")
};

export const decode = (text) => {
  if (text === '') { return '';} 
  let sn = "";
  text = text.match(/\d+\D{1}|\D/g);
  text.map( x => {
    let size = x.match(/\d+/) || 1;
    let char = x.match(/\D/);
    sn += char[0].repeat(size);
  })
  return sn;
};
