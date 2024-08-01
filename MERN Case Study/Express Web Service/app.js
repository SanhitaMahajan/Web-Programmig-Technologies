const express = require("express")
const bodyParser = require("body-parser")
const app = express()


//all url specific functions are in the file ./routes/router.js
const routes=require("./routes/router")


// configure the application 
// CORS settings 
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//configure the application
//add all middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

///url specific functions
app.use("/",routes)

// start the server 
app.listen(3001,function(){
    console.log("Server running at port 3001")
})

module.exports = app;