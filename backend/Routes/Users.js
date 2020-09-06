const express =require('express');
const users = express.Router();
const UserController = require('../Controllers/Users');

//signup
users.post('/register',UserController.register);

//login 
users.post('/login',UserController.login);

//dashbord
users.get('/dashboard',UserController.dashboard);

module.exports= users;