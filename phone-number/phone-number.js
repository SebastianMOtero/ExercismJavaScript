//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class PhoneNumber {
  constructor(phone = null) {
    this._phone = null;
    phone = phone.match(/\d/g);

    if (phone.length == 11) {
      if (phone[0] == 1) {
        phone.shift()
      }
    }

    if (phone.length == 10) {
      if(phone[0] > 1 && phone[3] > 1) {
        this._phone = phone.join("");
      }
    }
  }

  number() {
    return this._phone;
  }
}
