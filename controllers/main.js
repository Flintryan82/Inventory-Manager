const fs = require("fs");
const path = require("path");

const Product = require("../models/Product");
module.exports = function(req,res){

Product.find({}).lean().then((allProducts)=>{
    console.log(allProducts);
    let context = {
        product:[...allProducts],
    }; 

res.render("index.hbs",context);
});




};