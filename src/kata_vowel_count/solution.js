/*
* Return the number (count) of vowels in the given string.
* We will consider a, e, i, o, and u as vowels for this Kata.
*/
const getCount = str => {
  let vowelsCount = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {

    str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' ||
      str[i] === 'u' ? vowelsCount++ : vowelsCount;
  }
  return vowelsCount;
}

module.exports = getCount;
