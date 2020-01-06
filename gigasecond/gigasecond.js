//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const GIGASECOND = 1000000000000;

export const gigasecond = (inputMoment) => {
  var initialMoment = inputMoment.getTime();
	var outputMoment = new Date(initialMoment + GIGASECOND);
	return outputMoment;
};
