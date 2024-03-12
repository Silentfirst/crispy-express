const express= require('express')
const path= require('path')
const feedRouter= express.Router()

const auth = (req,res,next)=>{
    console.log(req.session)
    if(req.session){

        next()
    }
    else { 
        res.redirect('/v1/users/login')
    }
}

feedRouter.get('/',auth, (req,res)=>{
    res.send("Sex")
})

module.exports=feedRouter