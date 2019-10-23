/*Sukuriam duombaze*/
create database library
/*Paselectinam duombaze kuria naudosim*/
use library
/*Sukuriam naudojamoj duombazej table*/
CREATE TABLE books (
    id  INTEGER     NOT NULL    IDENTITY    PRIMARY KEY,
    firstname VARCHAR(20)    NOT NULL,
    lastname VARCHAR(20),
    year INTEGER,
    edition INTEGER,
    bookname VARCHAR(30)
);
/*I anksciau sukurta table pridedam duomenu*/
INSERT INTO books
VALUES ('Jonas', 'Butrimas', 2000, 1, 'Mein Kampf'),
    ('Vytautas', 'Saudargas', 2010, 2, 'Mein Kampf'),
    ('Tomas', 'Zutautas', 2000, 2, 'Radzi Likimas'),
    ('Lukas', 'Petraitis', 2010, 1, 'Radzi Likimas'),
    ('Gabija', 'Matuzaite', 2010, 1, 'Mein Kampf')
    ;
/*1 uzduotis: suskaiciuoti kiek is viso lenteleje knygos yra knygu*/
SELECT COUNT(*) FROM books
/*2 uzduotis: Isveskite visus pirmu knygu versiju pavadinimus surikiuotus pagal isleidimo metus nuo naujausios iki seniausios*/
SELECT bookname, year FROM books WHERE edition = 1 ORDER BY year DESC
/*3 uzduotis: Isveskite visas knygas kurios isleistos iki 2010 metu*/
SELECT * FROM books WHERE year < 2010
/*4 uzduotis: Isveskite kiek knygu isleista kokio leidimo (turi buti du stulpeliai: leidimas ir knygu skaicius)*/
SELECT edition, COUNT(bookname) as 'knygu sk.' FROM books 
    GROUP BY edition
/*5 uzduotis: Isveskite populiariausios knygos pavadinima (tai yra ta, kuria isleido daugiausiai autoriu)*/
SELECT TOP 1 bookname FROM books GROUP BY bookname ORDER BY COUNT(bookname) DESC
​
​
​
​/*Istrinam books table*/
DROP TABLE books