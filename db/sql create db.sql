
-- CREATE DATABASE IF NOT EXISTS tor_web_db;

-- CREATE USER 'tor'@'localhost' IDENTIFIED BY 'torapp';
-- GRANT ALL PRIVILEGES ON * . * TO 'tor'@'localhost';
 -- FLUSH PRIVILEGES;
 
CREATE TABLE IF NOT EXISTS tor_web_db.users (
        userID INT AUTO_INCREMENT PRIMARY KEY,
        name varchar(200) NOT NULL,
        email varchar(200) NOT NULL UNIQUE,
        password char(100) NOT NULL,
        isAdmin boolean DEFAULT 0 
        );

CREATE TABLE IF NOT EXISTS tor_web_db.vacations(
	vacID INT AUTO_INCREMENT PRIMARY KEY, 
    details text(500) NOT NULL, 
    destination varchar(255) NOT NULL, 
    pictureSrc varchar(255) , 
    startVac date,  
    endVac date,
    folowers int  
);
CREATE TABLE IF NOT EXISTS tor_web_db.vacFolower(
	vacID INT PRIMARY KEY, 
    userID INT ,
	FOREIGN KEY (vacID) REFERENCES vacations(vacID),
    FOREIGN KEY (userID) REFERENCES users(userID)
);