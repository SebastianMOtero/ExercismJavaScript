//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Change {
  calculate(coinArray, target) {
    let sn = [];
    let coins = coinArray.sort( (a, b) => b - a);
    console.log(coins)
    while (target > 0) {
      if (coins[0] <= target) { sn.push(coins[0]); target -= coins[0] }
      else { coins.shift() }
      console.log(coins);
    }
    console.log(sn)
    //empiezo por el array de mayor valor
    //si es igual, retono ese valor y listo
    //si e smenor, guardo ese valor y resto la diferencia, continuoo proceso
  }
}
