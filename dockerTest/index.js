const express= require('express')

const app= express(); 
const PORT = 3000

app.get('/',(req,res)=>{
    res.send("Received request")
})

app.listen(PORT,()=>console.log(`Listening at port :${PORT}`))