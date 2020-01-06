//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const earthPeriod = 31557600;

const planets = {
  'mercury' : earthPeriod * 0.2408467,
  'venus' : earthPeriod * 0.61519726,
  'earth' : earthPeriod * 1,
  'mars' : earthPeriod * 1.8808158,
  'jupiter' : earthPeriod * 11.862615,
  'saturn' : earthPeriod * 29.447498,
  'uranus' : earthPeriod * 84.016846,
  'neptune' : earthPeriod * 164.79132,
}

export const age = (planet, sec) => {
  return parseFloat((sec / planets[planet]).toFixed(2));
};
