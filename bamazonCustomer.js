var Table = require('cli-table');
var mysql = require("mysql");
var inquirer = require("inquirer");

//-------------Connect to sql Database----------------

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    //----Username------

    user: "root",

    //------My Password-------

    password: "password",
    database: "bamazon_db"
});

connection.connect(function(err){
	if(err)throw err;
	console.log("connected as id" + connection.threadId);
});

var displayProducts = function(){
	var query = "Select * FROM products";
	connection.query(query, function(err, res){
		if(err) throw err;
		// var displayTable = new Table ({
		// 	head: ["Item ID", "Product Name", "Catergory", "Price", "Quantity"],
		// 	colWidths: [10,25,25,10,14]
		// });
		// for(var i = 0; i < res.length; i++){
		// 	displayTable.push(
		// 		[res[i].item_id,res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
		// 		);
		// }
		//console.log(displayTable.toString());
		console.table(res);
		purchasePrompt();
	});
}

function purchasePrompt(){
	inquirer.prompt([
	{
		name: "ID",
		type: "input",
		message:"Please enter Item ID you like to purhcase.",
		filter:Number
	},
	{
		name:"Quantity",
		type:"input",
		message:"How many items do you wish to purchase?",
		filter:Number
	},

 ]).then(function(answers){
 	var quantityNeeded = answers.Quantity;
 	var IDrequested = answers.ID;
 	purchaseOrder(IDrequested, quantityNeeded);
 });
};

function purchaseOrder(ID, amtNeeded){
	connection.query('Select * FROM products WHERE item_id = ' + ID, function(err,res){
		if(err){console.log(err)};
		if(amtNeeded <= res[0].stock_quantity){
			var totalCost = res[0].price * amtNeeded;
			console.log("Good news your order is in stock!");
			console.log("Your total cost for " + amtNeeded + " " +res[0].product_name + " is " + totalCost + " Thank you!");

			connection.query("UPDATE products SET stock_quantity = stock_quantity - " + amtNeeded + "WHERE item_id = " + ID);
		} else{
			console.log("Insufficient quantity, sorry we do not have enough " + res[0].product_name + "to complete your order.");
		};
		//displayProducts();
	});
};

displayProducts(); 



















































// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId);

//     //startPrompt();
// });

// var mysql = require("mysql");
// var inquirer = require("inquirer");
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     //----username------
//     user: "root",
//     //------my pw-------
//     password: "password",
//     database: "bamazon_db"
// });
// //--------Product ID ----///----Number of units------
// var prompts = {
//     productIDPrompt: {
//         type: "input",
//         name: "products",
//         message: "Please enter the product ID of the product you would like to purchase: "
//     },
//     numberOfUnitsPrompt: {
//         type: "input",
//         name: "numberOfUnits",
//         message: "Please enter the number of units you would like to purchase: "
//     }
// };
// // ------Display Products------
// var displayProducts = function () {
//     console.log("---------------");
//     console.log("Selecting all products...\n");
//     connection.query("SELECT * FROM products", function (error, result) {
//         if (error) throw error;
//         result.forEach(function (element) {
//             console.log("product ID: " + element.itme_id + "\nName: " + element.product_name + "\nPrice($): " + element.price + "\n");
//         });
//         buyProduct();
//     });
// }
// // --------Buy Products----------
// var buyProduct = function () {
//     console.log("-----------");
//     inquirer.prompt([prompts.productIDPrompt, prompts.numberOfUnitsPrompt])
//         .then(function (answers) {
//             var query = "SELECT item_id, stock_quantity, price FROM proucts WHERE ?";
//             connection.query(query, {
//                 itme_id: answers.productID
//             }, function (error, results) {
//                 if (results.length === 0) {
//                     console.log("--------");
//                     console.log("\nProduct Id not found\n");
//                     buyProduct();
//                 } else if (result.length > 0) {
//                     if (answers.numberOfUnits <= results[0].stock_quantity) {
//                         var totalCost = answers.numberOfUnits * results[0].price;
//                         var updatedStockQuantity = results[0].stock_quantity - answers.numberOfUnits;
//                         var query = connection.query(
//                             "UPDATE products SET ? WHERE ?", [{
//                                     stock_quantity: updatedStockQuantity
//                                 },
//                                 {
//                                     itme_id: answers.productID
//                                 }
//                             ],
//                             function (error, results) {
//                                 console.log("----------");
//                                 console.log("\nSuccess!");
//                                 console.log("Total cost of your purchase is: $" + totalCost);
//                                 connection.end();
//                             }
//                         );
//                     } else if (answers.numberOfUnits > result[0].stock_quantity) {
//                         console.log("---------");
//                         console.log("\nNoneInStock!");
//                         console.log("Only " + results[0].stock_quantity + "units available.");
//                         console.log("Try again.\n");
//                         buyProduct();
//                     }
//                 }
//             });
//         });
// }
// connection.connect(function (error) {
//     if (error) throw error;
//     displayProducts();
// });