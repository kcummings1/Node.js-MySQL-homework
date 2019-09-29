var mysql = require ("mysql");
var inquirer = require ("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

port: 3306,

//----username------

user: "root",

//------my pw-------

password: "password",
database: "bamazon_db"
});

