const express = require('express');
const AuthController = require('../Controller/authController')
const route = express.Router();


route.get('/', (req, res)=>{
    res.render('home', { title: "Home"});
})

route.get('/login', (req, res) => {
    res.render('login', { title: "Login"});    
})
route.post('/login', (req, res) => {

})

route.get('/register', (req, res) => {
    res.render('register', { title: "Registration"});    

})
route.post('/register', (req, res) => {

})

module.exports = route;
