const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER,
  password        : process.env.DB_PASS,
  database        : process.env.DB_NAME
});
 
const sqlusers = `CREATE TABLE IF NOT EXISTS tor_web_db.users (
    userID INT AUTO_INCREMENT PRIMARY KEY,
    firstName CHAR(100) NOT NULL,
    lastName CHAR(100) NOT NULL,
    userName CHAR(200) NOT NULL UNIQUE,
    uPassword CHAR(100) NOT NULL,
    isAdmin BOOLEAN DEFAULT 0 
    );`;

const sqlvac = `CREATE TABLE IF NOT EXISTS tor_web_db.vacations(
	vacID 	INT AUTO_INCREMENT PRIMARY KEY, 
    vacDesc TEXT(500) NOT NULL, 
    vacTarget CHAR(100) NOT NULL, 
    vacPic 	CHAR(255) , 
    vacStart TIMESTAMP NOT NULL DEFAULT NOW(),  
    vacEnd TIMESTAMP NOT NULL DEFAULT NOW() ,
    vacPrice INT NOT NULL,
    vacFolowers INT  
);`;

const sqlfolow = `CREATE TABLE IF NOT EXISTS tor_web_db.vacFolower(
	vacID INT PRIMARY KEY, 
    userID INT ,
	FOREIGN KEY (vacID) REFERENCES vacations(vacID),
    FOREIGN KEY (userID) REFERENCES users(userID)
);`;
pool.on('connection', ( con) => {
    console.log(`Connecting to mysql in: ${con.threadId}`);
});
pool.query(sqlusers, (err, results) => {
    if(err) throw err;
    console.log('User table create...');
});

pool.query(sqlvac, (err, results) => {
    if(err) throw err;
    console.log('Vacations table create...');
});

pool.query(sqlfolow, (err, results) => {
    if(err) throw err;
    console.log('Folowers table create...');
});

module.exports = {pool};