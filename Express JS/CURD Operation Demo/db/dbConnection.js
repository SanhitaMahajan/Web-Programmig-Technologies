const mysql = require("mysql")

//database connection configration

var mysqlConnection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"PG_DAC_2024",
    database:"batch2",
    port:3306
});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log("Connection done");
    } else {
        console.log("Connection failed" + JSON.stringify(err));
    }
});

module.exports = mysqlConnection;