const express= require('express')
const path=require('path')
const userRouter = express.Router()
const sqlite3= require('sqlite3')
const db = require('../database.js')

const reqLog =(req,isPost)=>isPost==='post'? console.log(`Received post request at ${req.url}`) :console.log(`Received get request at ${req.url}`)

// GET all users
userRouter.get('/getUsers', (req,res)=>{
    reqLog(req)

    // Query to select all rows from the users table
    const query = 'SELECT * FROM users'; 
    // Execute the query
    db.all(query, [], (err, rows) => {
    if (err) {
        console.error('Error retrieving data:', err.message);
        res.status(500).json({ message: 'Internal server error.' });
    }
    
    // Log the retrieved rows
    console.log('Retrieved rows from users table:');  
    rows.forEach((row) => {
        console.log(row);  
    });

    res.status(200).json({message:"Check console",rows})

    });  
})

// GET login page
userRouter.get('/login',(req,res)=>{
    reqLog(req)
    res.status(200).sendFile( path.join(__dirname, '../frontend/login.html')  )
})

// POST login  page
userRouter.post('/login',(req,res)=>{
    reqLog(req,'post')

    const {username,email,password}= req.body

    // To prevent sql injection, i can trim username, email and password by the ", ` and ' 
    if(!username || !email || !password){
        res.status(401).send("Error occured, please enter credentials again")
    }

    const query = `
    SELECT * FROM users
    WHERE username = ? AND email = ? AND password = ?
    `;
    const hashedPassword=password
    const params = [username, email, password]
    try {
        db.get(query, params, (err, row) => {
            if (err) {
              console.error('Error executing login query:', err.message);
              res.status(401).json({ message:`${err.message}`})
              return;
            }

            if (!row) {
              // User not found or incorrect password 
              res.status(401).json({ message:`User not found`})
              return;
            } else {
              // User found
              console.log(row)

              req.session.user={
                email:email,
              }
              res.status(201).send(`Congrats, you're logged in `) 
            }
        });
    } catch {
        console.error("Error ocured while accessing DB",error.message)
        res.status(501).json({message:"Internal server error"})
    }

})

//GET Logout Route 
userRouter.get('/logout', (req, res) => {
    reqLog(req)

    //save info of user
    const user = req.session.user
    // Destroy session
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
            res.status(501).send('Internal Server Error');
        } else {
            console.log(user,"Logged out successfully")
            res.status(200).send('Logout successful, See you later, hasta la vista');
        }
    });
});

// GET signup page
userRouter.get('/signup',(req,res)=>{
    reqLog(req)
    res.status(200).sendFile( path.join(__dirname, '../frontend/signup.html')  )
})


// POST signup 
userRouter.post('/signup', (req,res)=>{
    reqLog(req,"post")
    // console.log(req.body)
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