const Product = require("../models/Product");
const Type = require("../models/Type");


module.exports = function(req,res){
    let loggedIn = req.loggedIn;
    let productId = req.params;
    let iDstring = productId.productId;
    let idArr = iDstring.split("");
    idArr.shift();
    let newId = idArr.join("");

Product.findById({_id:`${newId}`}).lean().then((product)=>{
    let context = {
        ...product,
        loggedIn
    }
       res.render("details.hbs",context); 
    //    console.log(Product.productName);
});

    



};