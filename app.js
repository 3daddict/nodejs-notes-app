const validator = require('validator');
const getNotes = require('./notes.js');

console.log(getNotes());

console.log(validator.isEmail('mike@example.com'));
console.log(validator.isURL('https://google.com'));