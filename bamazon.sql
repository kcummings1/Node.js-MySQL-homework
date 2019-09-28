DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

-- create table called 'products' which conctains store inventory --

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Fish Comb", "Sporting",20.00 ,25 );
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("String Cheese Peeler", "Kitchen",5.00 ,10 );
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Noodle Splash Face Guard", "Kitchen",10.99 ,4 );
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Big Toe Scratcher", "bath",11.00 ,7 );
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Elbow Shiner w/ rag", "bath",15.00 ,3 );
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Single Noodle Holder", "Kitchen",45.99 ,3 );
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Hover light", "Bed",55.99 ,10 );
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Boat Rack", "Sporting", 799.99 , 125 );
INSERT INTO products (Product_name,department_name,price,stock_quantity)
VALUES ("Water Vest w/ goldfish", "Fashion",134.99 ,15 );
INSERT INTO products (Product_name,department_name,price,stock_quantity)
VALUES ("Celery Gun", "Weapon",41.99 ,12 );

