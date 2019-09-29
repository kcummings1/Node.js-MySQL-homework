var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    //----username------

    user: "root",

    //------my pw-------

    password: "password",
    database: "bamazon_db"
});
//--------Product ID ----///----Number of units------

var prompts = {
    productIDPrompt: {
        type: "input",
        name: "products",
        message: "Please enter the product ID of the product you would like to purchase: "
    },
    numberOfUnitsPrompt: {
        type: "input",
        name: "numberOfUnits",
        message: "Please enter the number of units you would like to purchase: "
    }
};

// ------Display Products------

var displayProducts = function() {
    console.log("---------------");
    console.log("Selecting all products...\n");

    connection.query("SELECT * FROM products", function ( error, result) {
        if (error) throw error;

        result.forEach(function(element) {
            console.log("product ID: " + element.itme_id + "\nName: " + element.product_name + "\nPrice($): " + element.price + "\n");
        });
        buyProduct();
    });
}


