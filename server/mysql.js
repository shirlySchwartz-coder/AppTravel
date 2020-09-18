const mysql = require('mysql');
const { env } = require('dotenv').config();

const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER,
  password        : process.env.DB_PASS,
  database        : process.env.DB_NAME
});
 
pool.on('connection', () => {
    console.log('Connecting to mysql');
});
pool.query(`
    CREATE TABLE IF NOT EXISTS tor_web_db.vacations(
        vacID INT AUTO_INCREMENT PRIMARY KEY, 
        details text(500) NOT NULL, 
        destination varchar(255) NOT NULL, 
        pictureSrc varchar(255) , 
        startVac date,  
        endVac date,
        folowers int  
    );
`, (err, results) => {
    if(err) throw err;
});

pool.query(`
    CREATE TABLE IF NOT EXISTS tor_web_db.vacFolower(
        vacID INT PRIMARY KEY, 
        userID INT ,
        FOREIGN KEY (vacID) REFERENCES vacations(vacID),
        FOREIGN KEY (userID) REFERENCES users(userID)
    );
`, (err, results) => {
    if(err) throw err;
});

module.exports = {pool};