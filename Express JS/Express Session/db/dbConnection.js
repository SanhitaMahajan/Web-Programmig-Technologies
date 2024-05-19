const mysql = require("mysql")
var mysqlConnection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'PG_DAC_2024',
    database:'batch2',
    port:3306
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Database connected")
    }
    else{
        console.log("connection failed"+JSON.stringify(err))
    }
})

module.exports=mysqlConnection