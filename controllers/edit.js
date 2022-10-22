//This is gonne have a post request
const db = require("../config/database");
const Product = require("../models/Product");
const Type = require("../models/Type");

module.exports = {

    get: function (req, res) {
        let productId = req.params;
        let iDstring = productId.productId;
        let idArr = iDstring.split("");
        idArr.shift();
        let itemId = idArr.join("");

        // let productId = req.params.productId;
        let loggedIn = req.loggedIn;
        Product.findById(itemId).lean().then(product => {
            let context = {
                loggedIn,
                ...product,
                user:req.user
            }
            res.render("editProduct.hbs", context);
        });
    },
    post: function (req, res) {
        let productId = req.params;
        console.log(productId);
        let iDstring = productId.productId;
        let idArr = iDstring.split("");
        idArr.shift();
        let itemId = idArr.join("");
        console.log(itemId);
        let body = req.body;
        Product.findByIdAndUpdate(itemId, {
            $set: { ...body }
        }).then(result=>{
            console.log(result);
            res.redirect(`/details/:${itemId}`);
        });

    },
};