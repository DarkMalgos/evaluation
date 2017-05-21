#SHOW DATABASES; pour voir les bases existantes.
#SHOW TABLE; pour voir les tables. 

CREATE DATABASE evaluation; #creation of database
USE evaluation; #go on database

#create table name students
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    firstname VARCHAR(128), 
    lastname VARCHAR(128),
    age INT, 
    class VARCHAR(128), 
    gender VARCHAR(255)
); 

#create table name notes
CREATE TABLE notes (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    student INT, 
    mark INT
);

