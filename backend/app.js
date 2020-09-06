const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const path = require('path');
const flash = require('express-flash');

const Users = require('./routes/Users');
const connectDB = require('./Config/Database');
const Middleware = require('./Config/Middleware');

//runing on port
const port = process.env.PORT || 5000

//initialze app
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('common'));
app.use(helmet())
app.use(cors());

app.use(session({ 
  secret: 'session secret key',
  resave: true,
  saveUninitialized: true
}));

//flaSH
app.use(flash());
app.use(function(req, res, next){
  res.locals.messages = req.flash();
  next();
});

//Express-session
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true
  }));

//routes
app.use('/users',Users);


//middleware
app.use(Middleware.notFound)
app.use(Middleware.errorHandler)

//database connection
connectDB();

//listing on port
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});

