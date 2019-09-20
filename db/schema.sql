-- DROP DATABASE IF EXISTS burgers_db;
-- CREATE DATABASE burgers_db;
-- USE burgers_db;
USE a3sr3mwyzhw9b1zl;

DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers (
	`id` INT NOT NULL AUTO_INCREMENT,
    `burger_name` VARCHAR(255) NOT NULL,
    `devoured` BOOLEAN DEFAULT false,
    PRIMARY KEY (`id`)
);