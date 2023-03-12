CREATE TABLE users_file(
    id INT(10) NOT NULL AUTO_INCREMENT,
    file_src TEXT NOT NULL,
    uid INT NOT NULL,
    PRIMARY KEY(id)
);
--@block
CREATE table users_profile(
    id INT(10) NOT NULL AUTO_INCREMENT,
    profile_image TEXT,
    name VARCHAR(255) NOT NULL,
    password TEXT NOT NULL,
    PRIMARY key (id)
)

--@block
SELECT * from users_profile
--@block
SELECT *
FROM users_file;
--@block
delete from users_file;
--@block
delete from users_profile;

--@block
drop table users_file;

--@block
UPDATE users_file
SET file_src = REPLACE(file_src, 'localhost', '192.168.1.3')

--second project

--@block
select * from users_file where id = 10;