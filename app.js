const express = require('express');
const mongoose = require('mongoose');
const Router = require('./routes/router');
const bodyParser = require('body-parser')
const { resourceLimits } = require('worker_threads');

const app= express();
const port = 8080;

// Connect to a Database and then listen to a port
mongoose.connect('mongodb://localhost:27017/userdb')
    .then((result) => app.listen(port, ()=>{
        console.log('Server Listening on http://localhost:' + port,'\n', 'Connection to local database has been made')
    }) )
    .catch((err) => console.log(err.message));
// app.listen(port, () => {
//     console.log("Listening to port at port " + port)
// })

//middleware
app.use(express.static(__dirname + '/public'));

//view engine
app.set('view engine', 'ejs')

// Body Parsing
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false}))

//Route Handling 
app.use(Router)

