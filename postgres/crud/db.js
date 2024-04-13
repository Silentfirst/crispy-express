const {Pool} = require('pg');

const pool  = new Pool({
    host:'db',
    port:5432,   // I wonder if this had to be same as the port i specified while installing post gres 
    user:'sigmaChad',
    password:"pass123",
    database:'db'
});

module.exports= pool; 