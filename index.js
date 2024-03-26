const express = require('express')
const dotenv = require(  'dotenv') 
const sqlite3= require('sqlite3')
const db = require('./database.js')
const cookieParser = require('cookie-parser')
const userRouter = require('./controller/users')
const feedRouter = require('./controller/feedRouter')
const testRouter = require('./controller/testRouter.js')

dotenv.config()
const app = express()
const port = process.env.PORT || 5000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


//Controllers
app.use('/v1/users',userRouter)
app.use('/v1/feed',feedRouter)
app.use('/test', testRouter)


//Cleanup code
// Close the database connection when the Node.js process exits
const events= ['exit', 'SIGINT', 'SIGUSR1', 'SIGUSR2', 'uncaughtException', 'SIGTERM'];

['exit', 'SIGINT', 'SIGUSR1', 'SIGUSR2', 'uncaughtException', 'SIGTERM'].forEach((eventType) => {
    process.on(eventType, () => {
        db.close((err) => {
            if (err) {
                return console.error('Error closing database:', err.message);
            }
            console.log('Disconnected from the SQLite database.');
        });
    }); 
});



app.get('/',(req,res)=>{
    res.status(200).sendFile("./frontend/index.html",{ root: __dirname })
    console.log(req.url)
})





app.listen(port,()=>console.log(`Listening on ${port}`))