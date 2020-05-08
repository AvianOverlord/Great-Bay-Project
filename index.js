const inquirer = require("inquirer");
const mysql = require("mysql");

function Init()
{
    inquirer.prompt([
        {
            type: "list",
            name: "InitialChoice",
            message: "What would you like to do?",
            choices: ["Post an item","Bid on an item"]
        }
    ]).then(data =>
    {
        if(data.InitialChoice === "Post an item")
        {
            PostItem();
        }
        else
        {
            BidOnItem();
        }
    });
}

function PostItem()
{
    console.log("Item posting!");
    inquirer.prompt([
        {
            type: "input",
            name: "itemName",
            message: "What item do you wish to add?"
        },
        {
           type: "list",
           name: "category",
           message: "What category does this item fall under?",
           choices: ["Antiques","Appliances","Books","Consumables","Consumer Electronics","Media","Misc"]
        },
        {
            type: "input",
            name: "startingBid",
            message: "Where would you like bidding on this item to start? (in USD)"
        }
    ]).then(data => {
        const connection = mysql.createconnection(
            {host: "localhost", user: "root", password: "hello1234",database: "database.sql"});
        connection.connect(function(err) 
        {
            if (err) throw err; 
            console.log("connected as id " + connection.threadId); 
            connection.end();
        });
        connection.query(`INSERT INTO greatbay_db(itemName,category,startingBid,highestBid) 
        VALUES(${data.itemName},${data.category},${data.startingBid},${data.startingBid}) ;`,
        function(err, res){
            console.log(`${data.itemName} has been put up for auction at ${data.startingBid}`);
            res.end();
        });

    });
}

function BidOnItem()
{
    console.log("Item bidding!");
}

Init();
