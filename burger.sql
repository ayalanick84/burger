DROP database if exists burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
INSERT INTO burgers (name, devoured) VALUES ("Double Cheeseburger", false);
INSERT INTO burgers (name, devoured) VALUES ("Vegetarian", true);
INSERT INTO burgers (name, devoured) VALUES ("Hawaiian", true);