const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const filePath = './data/database.db';

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, '');
}


// Open the database connection
const db = new sqlite3.Database( filePath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Create table 
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    token TEXT
  )`);
});

// // Close the database connection when the Node.js process exits

// [`exit`, `SIGINT`, `SIGUSR1`, `SIGUSR2`, `uncaughtException`, `SIGTERM`].forEach((eventType) => {
//     process.on(eventType, () => {
//         db.close((err) => {
//           if (err) {
//             return console.error('Error closing database:', err.message);
//           }
//           console.log('Disconnected from the SQLite database.');
//         });
//       });
//   })


console.log("Bro i am in database.js and value of db is ");
console.log(db)

module.exports = db;
