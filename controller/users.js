const express= require('express')
const path=require('path')
const userRouter = express.Router()

const reqLog =(req)=> console.log(`Received request at ${req.url}`)


userRouter.get('/login',(req,res)=>{
    reqLog(req)
    res.status(200).sendFile( path.join(__dirname, '../frontend/login.html')  )
})


userRouter.get('/signup',(req,res)=>{
    reqLog(req)
    res.status(200).sendFile( path.join(__dirname, '../frontend/signup.html')  )
})

userRouter.post('/signup',(req,res)=>{
    reqLog(req)
    console.log(req.body)
    res.status(200).send("Successfully Logged in")
})


module.exports= userRouter