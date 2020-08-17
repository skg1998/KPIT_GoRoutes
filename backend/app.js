const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const Middleware = require('./Middleware')
const bodyParser = require('body-parser');

//runing on port
const port = process.env.PORT || 5000

//initialze app
const app = express();

app.use(bodyParser.json());
app.use(morgan('common'));
app.use(helmet())
app.use(cors({
    origin:process.env.CORS_ORIGIN
}));

app.get('/',(req,res)=>{
    res.json({
        message:"hello "
    })
})

//routes

//middleware
app.use(Middleware.notFound)
app.use(Middleware.errorHandler)

//database connection


//listing on port
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});

