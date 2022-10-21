//This is gonne have a post request
const db = require("../config/database");
const Product = require("../models/Product");
const Type = require("../models/Type");

module.exports = {

  get: function(req,res){
    let loggedIn = req.loggedIn;
        res.render("deleteProduct.hbs",{loggedIn : req.loggedIn});
    },
    post: function(req,res){
      
    }
};

