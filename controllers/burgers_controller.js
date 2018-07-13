// Set up the paths to where the frontend can go
// =============================================================
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/", function(req, res){
    burger.insertOne(req.body.burger_name, function(){
        res.redirect("/");
    });
});

router.put("/:id", function(req, res){
    var id = req.params.id;
    burger.updateOne(id, function(){
        res.redirect("/");
    });
});

//export router for use
// =============================================================
module.exports = router;
