const Product = require("../models/Product");
const Type = require("../models/Type");


module.exports = function(req,res){

    let productId = req.params.id;
    console.log(productId);


Product.findById(productId).lean().then((product)=>{
       res.render("details.hbs",product); 
});

    



};