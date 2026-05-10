/*
function callback(){                              //this function is executed after the main function is executed
    console.log("This is a callback function");
}

const add = (a,b,callback) => {
    let result = a + b;
    console.log("The sum is: " + result);
    callback();
}

add(2,5,callback);
*/

//OR

const add = (a,b,akash) => {
    let result = a + b;
    console.log("The sum is: " + result);
    akash();
}

// add(2,5, function(){
//     console.log("This is a callback function");
// });

//OR

add(2,5, () => {
    console.log("This is a callback function");  //most shortend and most used way to write a callback function
});