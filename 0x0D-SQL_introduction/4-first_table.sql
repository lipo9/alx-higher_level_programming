-- Write a script that creates a table called first_table in the current
-- database in a MySQL server.
-- first_table description:
-- 	id INT
-- 	name VARCHAR(256)
-- The database name will be passed as an argument of the mysql command
-- If the table first_table already exists, the script should not fail
-- Allowed usage of the SELECT or SHOW statements
CREATE TABLE IF NOT EXISTS first_table (
id INT,
name VARCHAR(256));
