//  add all imports 
const express = require("express")
const app = express()
const path = require("path")
const bodyParser = require('body-parser');
const routes = require("./routes/router")

// configure the application 
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")

// add all static reference settings 
app.set(express.static(path.join(__dirname,"public/css")))
app.set(express.static(path.join(__dirname,"public/js")))

// all all middleware 

// to seprate data and url 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// url specific functions
app.use("/",routes)


// start the server 
app.listen(3001,function(){
    console.log("server is running on port 3001")
})

module.exports = app;