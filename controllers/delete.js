//This is gonne have a post request
const db = require("../config/database");
const Product = require("../models/Product");
const Type = require("../models/Type");

module.exports = {

  get: function(req,res){
    let productId = req.params.id;
        let iDstring = productId;
        let idArr = iDstring.split("");
        idArr.shift();
        let itemId = idArr.join("");

        // let productId = req.params.productId;
        let loggedIn = req.loggedIn;
        Product.findById(itemId).lean().then(product => {
            let context = {
                loggedIn,
                ...product,
            }
            res.render("deleteProduct.hbs", context);
        });
    },
    post: function(req,res){
      let productId = req.params.id;
      console.log(productId);
      let iDstring = productId;
      let idArr = iDstring.split("");
      idArr.shift();
      let itemId = idArr.join("");
      console.log(itemId);
      let body = req.body;
      Product.findByIdAndDelete(itemId).then(result=>{
          console.log(result);
          res.redirect("/");
      });

    },
};

