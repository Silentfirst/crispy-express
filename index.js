const express = require('express')
const dotenv = require(  'dotenv') 
const userRouter = require('./controller/users')
const feedRouter = require('./controller/feedRouter')


dotenv.config()
const app = express()
const port = process.env.PORT || 5000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));


app.use('/v1/users',userRouter)
app.use('/v1/feed',feedRouter)

app.get('/',(req,res)=>{
    res.status(200).sendFile("./frontend/index.html",{ root: __dirname })
    console.log(req.url)
})





app.listen(port,()=>console.log(`Listening on ${port}`))