-- Create DB 
CREATE DATABASE test_db;

-- Create table 
CREATE TABLE test_tb(
  test_tb_id SERIAL PRIMARY KEY,
  test_description VARCHAR(255)
);

-- COMMAND FUNCTIONS 
-- Show all databases 
-- \l

-- move inside database
-- \c <db name>

-- Show table in database 
-- \dt 

-- Create database
-- CREATE DATABASE <bd mame>

-- Create database table
-- CREATE TABLE  <bd mame>

-- OTHER QUERIES 
-- -- Alter table 
-- ALTER TABLE "test_db" ADD FOREIGN KEY ("test_userId") REFERENCES "test_users" ("user_id");

-- -- Drop table 
-- DROP TABLE "test_tb";


-- Here is an example of a PostgreSQL INNER JOIN:

-- SELECT columns
-- FROM table1 
-- INNER JOIN table2
-- ON table1.column = table2.column;


-- The syntax for the PostgreSQL LEFT OUTER JOIN is:

-- SELECT columns
-- FROM table1
-- LEFT OUTER JOIN table2
-- ON table1.column = table2.column;


-- Here is an example of a PostgreSQL LEFT OUTER JOIN:

-- SELECT suppliers.supplier_id, suppliers.supplier_name, orders.order_date
-- FROM suppliers
-- LEFT OUTER JOIN orders
-- ON suppliers.supplier_id = orders.supplier_id;


-- The syntax for the PostgreSQL RIGHT OUTER JOIN is:

-- SELECT columns
-- FROM table1
-- RIGHT OUTER JOIN table2
-- ON table1.column = table2.column;


-- The syntax for the PostgreSQL FULL OUTER JOIN is:

-- SELECT columns
-- FROM table1
-- FULL OUTER JOIN table2
-- ON table1.column = table2.column;