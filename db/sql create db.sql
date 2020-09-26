
CREATE DATABASE IF NOT EXISTS tor_web_db;

-- CREATE USER 'tor'@'localhost' IDENTIFIED BY 'torapp';
-- GRANT ALL PRIVILEGES ON * . * TO 'tor'@'localhost';
 -- FLUSH PRIVILEGES;
 
CREATE TABLE IF NOT EXISTS tor_web_db.users (
        userID INT AUTO_INCREMENT PRIMARY KEY,
        firstName CHAR(100) NOT NULL,
        lastName CHAR(100) NOT NULL,
        userName CHAR(200) NOT NULL UNIQUE,
        uPassword CHAR(100) NOT NULL,
        isAdmin BOOLEAN DEFAULT 0 
        );

CREATE TABLE IF NOT EXISTS tor_web_db.vacations(
	vacID 	INT AUTO_INCREMENT PRIMARY KEY, 
    vacDesc TEXT(500) NOT NULL, 
    vacTarget CHAR(100) NOT NULL, 
    vacPic 	CHAR(255) , 
    vacStart DATETIME,  
    vacEnd DATETIME ,
    vacPrice INT NOT NULL,
    vacFolowers INT  
);
CREATE TABLE IF NOT EXISTS tor_web_db.vacFolower(
	vacID INT PRIMARY KEY, 
    userID INT ,
	FOREIGN KEY (vacID) REFERENCES vacations(vacID),
    FOREIGN KEY (userID) REFERENCES users(userID)
);