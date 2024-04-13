const express= require('express');
const dotenv= require('dotenv');
dotenv.config(); 
const pool = require('./db'); 

const app = express(); 
app.use(express.json());

app.get('/',async (req, res)=>{
    try {
        const data = await pool.query(`Select * from schools`);
        res.status(200).send(data.rows)
    } catch (err) {
        console.log(err); 
        res.sendStatus(500); 
    }}
);

app.post('/',async (req,res)=>{
    const {name,location} = req.body; 
    try {
        await pool.query(`Insert INTO schools (name ,address) VALUES ($1, $2)`, [name , location]);
        res.status(200).json({message:"Secessfully added row"})
    } catch (err) {
        console.log(err); 
        res.sendStatus(500); 
    }})

app.get('/setup', async (req,res)=> { 
    try {
        await pool.query(`Create TABLE schools(id SERIAL PRIMARY KEY, name VARCHAR(100), address VARCHAR(100))`);
        res.status(200).json({message:"Secessfully Created Table schools"})
    } catch (err) {
        console.log(err); 
        res.sendStatus(500); 
    }

})

app.listen(process.env.PORT, ()=>{
    console.log(`listening on port: http://localhost:${process.env.PORT}`)
});