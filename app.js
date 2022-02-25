const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const Router = require('./routes/router')
const { resourceLimits } = require('worker_threads');

const app= express();
const port = 8080;
// Listen to a Port
app.listen(port, () => {
    console.log("Listening to port at port " + port)
})

//middleware
app.use(express.static(__dirname + '/public'));

//view engine
app.set('view engine', 'ejs')

//Route Handling 
app.use(Router)

