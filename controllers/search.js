const fs = require("fs");
const path = require("path");

const Product = require("../models/Product");
const User = require("../models/User");

module.exports = function(req,res,next){
let userinput = req;

console.log(userinput + " 123 ");


//console.log(req.loggedIn,req.user);
Product.find({ productName: `${userinput}`}).lean().then((productName)=>{
    //console.log(allProducts);
    let context = {
        loggedIn: req.loggedIn,
        user:req.user,
        productName: req.productName,
    }; 

res.render("index.hbs",context);
});

};

