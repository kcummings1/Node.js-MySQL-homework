DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

-- create table called 'products' which conctains store inventory --

CREATE TABLE products (
  item_id INT(10) AUTO_INCREMENT NOT NULL ,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(100) NOT NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name,department_name, price, stock_quantity)
VALUES ("Fish Comb", "Sporting", 20.00 , 25 ),
("String Cheese Peeler", "Kitchen", 5.00 , 10 ),
("Noodle Splash Face Guard", "Kitchen", 10.99 , 4 ),
("Big Toe Scratcher", "Bath", 11.00 , 7 ),
("Elbow Shiner w/ rag", "Bath", 15.00 , 3 ),
("Single Noodle Holder", "Kitchen", 45.99 , 3 ),
("Hover light", "Home Goods", 55.99 , 10 ),
("Boat Rack", "Sporting", 799.99 , 125 ),
("Water Vest w/ goldfish", "Fashion", 134.99 , 15 ),
("Celery Gun", "Weapon", 41.99 , 12 );

