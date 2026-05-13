// learn about loadash library in node.js


var _  = require('lodash');  //normal variable name can also be used

var data = ["person", "person",1,2,3,1,2,5,3,'name', 'age','3'];


console.log(_.uniq(data)); //uniq is a function in loadash which removes the duplicate values from the array and returns the unique values in the array.