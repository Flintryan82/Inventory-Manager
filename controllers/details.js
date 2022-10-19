const Product = require("../models/Product");
const Type = require("../models/Type");


module.exports = function(req,res){
    let productId = req.params;
    let iDstring = productId.productId;
    let idArr = iDstring.split("");
    idArr.shift();
    let newId = idArr.join("");

Product.findById({_id:`${newId}`}).lean().then((product)=>{
       res.render("details.hbs",product); 
    //    console.log(Product.productName);
});

    



};