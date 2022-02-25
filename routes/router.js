const express = require('express');
const route = express.Router();
const { index_Get, login_Get, login_Post, register_Post, register_Get} = require('../Controller/authController');


route.get('/', index_Get)

route.get('/login', login_Get)
route.post('/login',  login_Post)

route.get('/register',  register_Get)
route.post('/register', register_Post)

module.exports = route;
