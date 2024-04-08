const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const cors = require('cors')

dotenv.config(); 

const app = express(); 

app.use(cors())
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.send("hi"); 
});

app.get('/send', (req,res)=>{
    console.log('received GET request to download pdf', req.headers)
    res.sendFile(path.join(__dirname,'public','audrey.pdf'))
})

app.listen(3069, ()=>{
    console.log(`listening on port http://localhost:${process.env.PORT}`)
})