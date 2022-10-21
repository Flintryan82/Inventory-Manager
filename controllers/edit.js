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
    let newId = idArr.join("");

        // let productId = req.params.productId;
        let loggedIn = req.loggedIn;
        Product.findById(newId).lean().then(product => {
            let context = {
                loggedIn,
                ...product,
            }
            res.render("editProduct.hbs", context);
        });
    },
    post: function (req, res) {
        let body = req.body;

    }
};