/*Sukuriam duombaze*/
create database airports
/*Paselectinam duombaze kuria naudosim*/
use airports
/*Sukuriam naudojamoj duombazej table*/
CREATE TABLE sb_airports (
    biz_id  INTEGER     NOT NULL    IDENTITY    PRIMARY KEY,
    biz_name VARCHAR(50)    NOT NULL,
    address VARCHAR(50),
    city VARCHAR(20)
);
/*I anksciau sukurta table pridedam duomenu*/
INSERT INTO sb_airports
VALUES ('Global Air Response', '7355 South Peoria Street, A3/suite 209', 'Eaglewood'),
    ('Demolis City - Airport', '744 Boykin Field Road', 'Demopolis'),
    ('Brewton Airport', '205 Airport Drive', 'Brewton'),
    ('Huntsville International Airport', '1000 Southwest Glenn Hearn Boulevard', 'Huntsville'),
    ('Hartselle Airport', '450 Airport Road Southwest', 'Hartselle');
/*1 uzduotis: suskaiciuoti kiek is viso yra oro uostu*/
SELECT COUNT(biz_id) FROM sb_airports
/*2 uzduotis: Iš 'sb_airports' lentelės išrinkti oro uostų pavadinimus ir miestus. Duomenis surūšiuoti pagal pavadinimą(Z-A).*/
SELECT biz_name, city FROM sb_airports ORDER BY biz_name DESC
/*3 uzduotis: Iš 'sb_airports' lentelės išrinkti oro uostų pavadinimus, kurie prasideda 'H' raide.*/
SELECT biz_name FROM sb_airports 
    WHERE biz_name LIKE 'H%'
/*4 uzduotis: Iš 'sb_airports' lentelės išrinkti oro uostus, kurie yra 'Meridianville' ir pavadinime yra žodis 'Airport'.*/
SELECT * FROM sb_airports 
    WHERE city LIKE '%Huntsville%'
    AND biz_name LIKE '%Airport%'
/*5 uzduotis: Išvesti kiek oro uostų yra kiekviename mieste (turi būti du stulpeliai: miestas ir oro uostų skaičius).*/
SELECT city, COUNT(biz_id) FROM sb_airports GROUP BY city














DROP TABLE sb_airports