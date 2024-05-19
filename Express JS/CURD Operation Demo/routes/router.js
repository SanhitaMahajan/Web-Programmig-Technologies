const express = require("express")
const router = express.Router()

//  database connections
const connection = require("../db/dbConnection")

//get all products from database and display it in table format
router.get("/product", function(req,resp){
    connection.query("select * from productJS ", function(err,data){
        if(err){
            resp.status(404).send("Data not found");
        }
        else{
            console.log("data recived"+data.length)
            resp.render("index",{prodArr:data})
        }
    })
})

// display form for adding a new product in the databse 
router.get("/addProduct",function(req,resp){
    resp.render("addProduct")
})

// add new product into table 
router.post("/insertProduct",function(req,resp){
    connection.query("insert into productJS values(?,?,?,?)",[req.body.pid,req.body.pname,req.body.quantity,req.body.price],function(err,result){
        if(err){
            resp.status(500).send("error occurred")
        }
        else{
            if(result.affectedRows>0){
                resp.redirect("/product");
            }
        }
    })
})


// delete product and go back to /product 
router.get("/deleteProduct/:pid", function(req,resp){
    connection.query("delete from productJS where pid=?", [req.params.pid],function(err,result){
        if(err){
            resp.status(500).send("error occured")
        }
        else{
            if(result.affectedRows>0){
                resp.redirect("/product")
            }
        }
    })
})


// update or edit the product details 
//  display form to edit when click on edit button 
router.get("/updateForm/:pid", function(req, resp) {
    connection.query("select * from productJS where pid=?", [req.params.pid], function(err, data) {
        if (err) {
            console.log(err);
            resp.status(404).send("Data not found");
        } else {
            resp.render("updateProductForm", { prod: data });
        }
    });
});


router.post("/updateProduct/:pid", function(req, resp) {
    connection.query("UPDATE productJS SET pname=?, quantity=?, price=? WHERE pid=?", [req.body.pname, req.body.quantity, req.body.price, req.params.pid], function(err, data) {
        if (err) {
            console.log(err);
            resp.status(500).send("Error updating product");
        } else {
            if (data.affectedRows > 0) {
                console.log("Product updated successfully");
                resp.redirect("/product");
            }
        }
    });
});


module.exports = router;