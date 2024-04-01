const express= require('express')
const path= require('path')
const feedRouter= express.Router()
const reqLog = require('../common/reqlog')
const jwt = require('jsonwebtoken')

const auth = (req,res,next)=>{
    reqLog(req)
    console.log("in auth function from ", req.url," route")

    console.log(req.headers)
    

    const authHeader = req.headers['authorization']
    
    if( authHeader ){
        console.log(authHeader)
        next()
    }
    else { 
        res.redirect('/v1/users/login')
    }
}

feedRouter.use(auth)

feedRouter.get('/', (req,res)=>{
    reqLog(req)
    res.send("Sex")
})

module.exports=feedRouter