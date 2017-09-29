// const R = require('ramda');

const languages = require('./data.js');

/*
 * Write a 'welcome' function that takes a parameter 'language'
 * (always a string), and returns a greeting - if you have it in your database.
 * It should default to English if the language is not in the database, or in
 * the event of an invalid input.
 */

// imperative solution
const greet = language => {
  for (let property in languages) {
    if (property === language) {
      console.log(languages[property]);
      return languages[property];
    }
  }

  console.log(languages['english']);
  return languages['english'];
};

module.exports = greet;
