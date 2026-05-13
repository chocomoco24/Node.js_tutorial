// Here we are going to learn about File System(fs) module and OS module in Node.js

var fs = require('fs');
var os = require('os');

// OS functions

var user = os.userInfo();
console.log(user.username);

// fs function

fs.appendFile('greeting.txt','hi ' + user.username + '👋\n', () =>{
    console.log("File is created");
} )