//This is gonne have a post request
const db = require("../config/database");
const Product = require("../models/Product");
const Type = require("../models/Type");

module.exports = {

  get: function(req,res){
    let loggedIn = rew.loggedIn;
        res.render("editProduct.hbs",{loggedIn});
    },
    post: function(req,res){
        let body = req.body;

    }
};

