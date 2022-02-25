const express = require('express');
const mongoose = require('mongoose');
const Router = require('./routes/router');
const bodyParser = require('body-parser')
const { resourceLimits } = require('worker_threads');
const authRoutes = require('./routes/authRoutes');
const port = 8080;

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

//routes 
app.get('/', (req, res)=>{
    res.render('home');
})
app.get('/smoothies', (req, res) => {
    res.render('smoothies')
});
// app.get('/login', (req, res)=>{
//     res.sendFile('./views/login.html', { root: __dirname })
    
// })

// app.get('/register', (req, res) => {
//     //res.sendFile(path.join(__dirname, 'register.html'))
//     res.sendFile('./views/register.html', { root: __dirname })
// }) 

app.use(authRoutes);