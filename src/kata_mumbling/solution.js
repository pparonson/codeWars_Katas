const accum = (s) => {
  s = s.toLowerCase();
  let counter1 = 0;
  let counter2 = 0;
  let newString = '';

  // iterate through s to manipulate ea char
  for (let i = 0; i < s.length; i++) {
    // add chars to newString equal to counter1
    for (let j = 0; j <= counter1; j++) {
      // if counter2 equals 0, then capitalize, otherwise just add the char
      if (counter2 === 0) {
        newString += s.substring(i, i + 1).toUpperCase();
      } else {
        newString += s.substring(i, i + 1);
      }
      counter2++;
    }
    newString += '-';
    counter1++;
    // reset counter2 for the next char in s
    counter2 = 0;
  }
  // remove the trailing '-'
  newString = newString.substring(0, newString.length - 1);
  return newString;
}

module.exports = accum;
