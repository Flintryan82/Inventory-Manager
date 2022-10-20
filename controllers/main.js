const fs = require("fs");
const path = require("path");

const Product = require("../models/Product");
module.exports = function(req,res){
console.log(req.loggedIn,req.user);
Product.find({}).lean().then((allProducts)=>{
    console.log(allProducts);
    let context = {
        products:[...allProducts],
        loggedIn: req.loggedIn
    }; 

res.render("index.hbs",context);
});

};