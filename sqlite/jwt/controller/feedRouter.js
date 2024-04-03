const express= require('express')
const path= require('path')
const feedRouter= express.Router()
const reqLog = require('../common/reqlog')
const jwt = require('jsonwebtoken')
const dotenv = require(  'dotenv') 
dotenv.config()
//auth middleware handler 
const auth = require('../middleware/auth')


feedRouter.use(auth)

feedRouter.get('/', (req,res)=>{
    reqLog(req)
    res.send("Sex")
})

module.exports=feedRouter