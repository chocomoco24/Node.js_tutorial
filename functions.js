
// import prompt from 'prompt-sync';
// var input = prompt();

//or 

// var input = require('prompt-sync')();
//--------------------------------------------

//DIFFERENT WAYS TO DEFINE A FUNCTION


// function add(a,b){
//     return Number(a) + Number(b);
// }

//or

// var add = function(a,b){
//     return a + b;
// }

//or

// var add = (a,b) => {return a + b;}

// or

var add = (a,b) => a + b;

// let a = input("Enter first number: ");
// let b = input("Enter second number: ");

var result = add(2,5);

console.log("The sum is: " + result);

//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined
(function(){
    console.log("This is an IIFE function");
})();