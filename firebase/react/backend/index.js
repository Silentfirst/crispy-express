const express = require('express')
const dotenv = require('dotenv')

dotenv.config(); 

const app = express(); 

app.get('/', (req,res)=>{
    res.send("hi"); 
});

app.listen(3069, ()=>{
    console.log(`listening on port http://localhost:${process.env.PORT}`)
})