### PROJECT 2
### UT BOOT CAMP
### THE KITCHEN CODERS
### Schema

CREATE DATABASE kitchencodersDB;
USE kitchencodersDB;

CREATE TABLE recipes
(
	id int NOT NULL AUTO_INCREMENT,
	routeName varchar(255),
	title varchar(255) NOT NULL,
	ingredients varchar(255) NOT NULL,
	instructions varchar(255) NOT NULL,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);
