const fs = require("fs");
const path = require("path");

const Product = require("../models/Product");
const User = require("../models/User");

module.exports = function(req,res){



console.log(req.loggedIn,req.user);
Product.find({}).lean().then((allProducts)=>{
    console.log(allProducts);
    let context = {
        products:[...allProducts],
        loggedIn: req.loggedIn,
        user:req.user
    }; 

res.render("index.hbs",context);
});

};