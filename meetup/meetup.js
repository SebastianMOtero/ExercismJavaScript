//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const meetupDay = (year, month, day, aux) =>  {
  let date  = new Date(year, month);

  let solution = [];
  let daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let searchedDay = daysArr.indexOf(day);

  while (date.getMonth() === month) { 
    if (date.getDay() === searchedDay) {
      solution.push(date.getDate());
    } 
    date.setDate(date.getDate() + 1);
  }
  
  let numberOfDay = aux.match(/[1-5]/g);
  if (numberOfDay) {
    if (solution.length  >= parseInt(numberOfDay))  {
      numberOfDay = solution[numberOfDay.toString()-1];
    } else {
      throw new Error('error')
    }
  };

  if (aux.match(/(?:^|\W)first(?:$|\W)/)) {
    numberOfDay = solution[0];
  }

  if(aux.match(/(?:^|\W)last(?:$|\W)/)) {
    numberOfDay = solution[solution.length-1];
  }

  if (numberOfDay === null) {
    numberOfDay = solution.filter( x => x >9 && x < 20)[0]
  }
  return new Date(year, month, numberOfDay);
}
