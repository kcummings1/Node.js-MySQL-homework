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


var buyProduct = function () {
    console.log("-----------");
    inquirer.prompt([prompts.productIDPrompt, prompts.numberOfUnitsPrompt])
    .then (function (answers) {
        var query = "SELECT item_id, stock_quantity, price FROM proucts WHERE ?";
        connection.query(query, {
            itme_id: answers.productID
        }, function (error, results) {
            if (results.length === 0) {

                console.log("--------");
                console.log("\nProduct Id not found\n");
                buyProduct();
        } else if (result.length > 0) {
            
        }
    })
}