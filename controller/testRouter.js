const express= require('express')
const router= express.Router()
const path = require('path')
const cookieParser = require('cookie-parser')



const reqLog =(req,isPost)=>isPost==='post'? console.log(`Received post request at ${req.url}`) :console.log(`Received get request at ${req.url}`)

router.get('/',(req,res)=>{
    reqLog(req)
    res.status(200).send("I am Test Router BC")
})








// Routes for dealing with cookies. I am not sure if req.cookies is provided by cookie-parser or is built in with express
router.get('/cookie', (req,res)=> {
    reqLog(req)

    console.log("Cookies are")

    const cookieNames = req.cookies
    console.log(cookieNames)
    res.status(200).json({message:"Check console for cookies", cookies:cookieNames})
})

router.get('/set-cookie', (req,res)=>{
    reqLog(req)

    res.cookie("Hi","Human is my love",{maxAge:6000*60})
    res.status(200).send("Cookie set successfully")
})

module.exports=router