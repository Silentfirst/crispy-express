const express= require('express')
const path= require('path')
const feedRouter= express.Router()
const reqLog = require('../common/reqlog')

const auth = (req,res,next)=>{
    reqLog(req)
    console.log("Session Exists",req.session) 
    if(req.session && req.session.user){
        console.log(req.session.user)
        next()
    }
    else { 
        res.redirect('/v1/users/login')
    }
}

feedRouter.get('/',auth, (req,res)=>{
    reqLog(req)
    res.send("Sex")
})

module.exports=feedRouter