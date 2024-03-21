const express= require('express')
const path=require('path')
const userRouter = express.Router()
const sqlite3= require('sqlite3')
const db = require('../database.js')

const reqLog =(req,isPost)=>isPost==='post'? console.log(`Received post request at ${req.url}`) :console.log(`Received get request at ${req.url}`)

userRouter.get('/getUsers', (req,res)=>{
    reqLog(req)

    // Query to select all rows from the users table
    const query = 'SELECT * FROM users';

    // Execute the query
    db.all(query, [], (err, rows) => {
    if (err) {
        console.error('Error retrieving data:', err.message);
        return;
    }
    
    // Log the retrieved rows
    console.log('Retrieved rows from users table:');
    rows.forEach((row) => {
        console.log(row);
    });
    });

    res.status(200).send("Check console")

})

userRouter.get('/login',(req,res)=>{
    reqLog(req)
    res.status(200).sendFile( path.join(__dirname, '../frontend/login.html')  )
})


userRouter.get('/signup',(req,res)=>{
    reqLog(req)
    res.status(200).sendFile( path.join(__dirname, '../frontend/signup.html')  )
})

userRouter.post('/signup', (req,res)=>{
    reqLog(req,"post")
    console.log(req.body)
    const {username,email,password}= req.body 
    if(!username || !email || !password) { //did not receive full data
        res.status(401).send("Error getting signup data, please try again")
    }
    //hash password
    const hashedPassword=  password
    try {

        const query = `
        INSERT INTO users (username, email, password)
        VALUES (?, ?, ?)
        `;

        const params = [username, email, hashedPassword];

        db.run(query, params, function(err) {
            if (err) {
                console.error(err)
                return res.status(500).json({ message: 'Failed to create user.' });
            }
            // User created successfully
            res.status(201).json({ message: 'User created successfully.' });
        });

    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }



 })


module.exports= userRouter