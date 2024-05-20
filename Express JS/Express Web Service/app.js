const express = require("express")
const session = require("express-session")
const bodyParser = require("body-parser")
const app = express()

//all url specific functions are in the file ./routes/router.js
const routes=require("./routes/router")

//configure the application
//add all middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

///url specific functions
app.use("/",routes)


app.listen(3001,function(){
    console.log("Server running at port 3001")
})

module.exports = app;