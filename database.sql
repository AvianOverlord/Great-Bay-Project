DROP DATABASE IF EXISTS greatbay_db;
CREATE DATABASE greatbay_db;
USE greatbay_db;

CREATE TABLE items(
    id INTEGER NO NULL AUTO_INCREMENT,
    itemName VARCHAR(30) NO NULL,
    category VARCHAR(30) NO NULL,
    startingBid INTEGER DEFAULT 1,
    highestBid INTEGER DEFAULT 1,
    PRIMARY KEY(id)
);
