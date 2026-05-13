const notes = require('./import_from.js');

var age = notes.age;
console.log(age);

var result = notes.addNumber(age, 18);
console.log('result is ' + result);

console.log('server file is imported');