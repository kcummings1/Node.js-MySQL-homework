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

INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Code Names", "Games", 19.95, 15);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Taboo", "Games", 10.95, 10);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Scattergories", "Games", 20.49, 2);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Catan", "Games", 24.95, 5);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("The Girl on the Train", "Books", 14.95, 5);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Behind Closed Doors", "Books", 10.99, 1);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Harry Potter and the Cursed Child", "Books", 14.95, 10);
INSERT INTO products ( ProductName,DepartmentName,Price,StockQuantity)
VALUES ("MacBook Air", "Computers", 899.99, 3);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("HP", "Computers", 479.99, 10);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Dell", "Computers", 499.99, 1);
