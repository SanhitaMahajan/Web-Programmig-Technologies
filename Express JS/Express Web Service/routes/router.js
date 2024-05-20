const express = require("express")
const router = express.Router();
const connection = require("../db/dbConnection");
const { json } = require("body-parser");

// to get all products
router.get(`/products`, function (req, resp) {
    connection.query("select * from productJS", function (err, data) {
        if (err) {
            resp.status(500).send("data not found")
        } else {
            resp.send(data);
        }
    })
})

// to add new product
router.post(`/products/:id`, function (req, resp) {
    connection.query("insert into productJS values(?,?,?,?)", [req.body.pid, req.body.pname, req.body.quantity, req.body.price], function (err, result) {
        if (err) {
            console.log(JSON.stringify(err))
            resp.status(500).send("error occred")
        }
        else {
            if (result.affectdRows > 0) {
                resp.send(200).send("product added successfully")
            }
        }
    })
})

// to delete a product 
router.delete(`/products/:id`, function (req, resp) {
    // console.log("in delete")
    connection.query("DELETE FROM productJS WHERE pid = ?", [req.params.id], function (err, result) {
        if (err) {
            console.log(JSON.stringify(err))
            console.log(err)
            resp.status(500).send("error occured")
        }
        else {
            if (result.affectdRows > 0) {
                resp.send(200).send("product deleted successfully")
            }
        }
    })
})

// update a product 
router.put(`/products/:id`, function (req, resp) {
    connection.query("update productJS set pname=?, quantity=?, price=? where pid=?", [req.body.pname, req.body.quantity, req.body.price, req.body.pid], function (err, result) {
        if (err) {
            console.log(JSON.stringify(err))
            resp.send(500).send("error occured")
        }
        else {
            if (result.affectdRows > 0) {
                resp.send(200).send("product updated successfully")
            }
        }
    })
})

module.exports = router;