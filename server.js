// here we will create a server using express package

const express = require ('express');

const app = express();


//METHODS FOR SENDING AND RECEIVING DATA FROM THE SERVER

// GET method || this method is used to retrieve data from the server

app.get('/', function(req, res) {
    res.send('The server is running')
})

app.get('/about', (req, res) => {
    res.send('This is the about page')
})


app.listen(3000, () => 
    console.log("Server is running on 3000")) // this will start the server on port 3000