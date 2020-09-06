const mongoose = require('mongoose');

function connection(){
    const mongoURI = 'mongodb://localhost:27017/HacksOf';
    mongoose.connect(mongoURI,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:true
    });
    const conn = mongoose.connection;

    conn.once('open', ()=>{
        console.log('Database connection');
    }).catch(err =>{
        console.log('Database failed');
    })
}

module.exports = connection;