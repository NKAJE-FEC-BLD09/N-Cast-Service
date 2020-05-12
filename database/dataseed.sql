CREATE ROLE nkajfec WITH PASSWORD 'password'; 

CREATE DATABASE nkajfec WITH OWNER nkajfec;

\c nkajfec;

CREATE TABLE movie ( id INT PRIMARY KEY, movietitle VARCHAR(50) );
copy MOVIE(id, movietitle) from 'C:\GitHub\N-Cast-Service\data\movie_db.csv' delimiter ',' csv header;

create table actor ( id INT PRIMARY KEY, name VARCHAR(50), movieid INT REFERENCES movie(id) );
copy actor(id, name, movieid ) from 'C:\GitHub\N-Cast-Service\data\actor_db.csv' delimiter ',' csv header;

create table character ( id INT PRIMARY KEY, name VARCHAR(20), movieid INT REFERENCES movie(id), actorid INT REFERENCES actor(id) );
copy character(id, name, movieid, actorid ) from 'C:\GitHub\N-Cast-Service\data\character_db.csv' delimiter ',' csv header;

create table quote ( id INT PRIMARY KEY, quote VARCHAR(250), characterid INT REFERENCES character(id) );
copy quote(id, quote, characterid ) from 'C:\GitHub\N-Cast-Service\data\quote_db.csv' delimiter ',' csv header;

create table actordescription (id INT PRIMARY KEY, description VARCHAR(250), actorid INT REFERENCES actor(id) );
copy actordescription(id, description, actorid ) from 'C:\GitHub\N-Cast-Service\data\actordescription_db.csv' delimiter ',' csv header;

create table actorimage (id INT PRIMARY KEY, image VARCHAR(250), actorid INT REFERENCES actor(id) );
copy actorimage(id, image, actorid ) from 'C:\GitHub\N-Cast-Service\data\actorimage.csv' delimiter ',' csv header;

-- for loop to insert faker stuff