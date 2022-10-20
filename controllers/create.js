//This is gonne have a post request
const db = require("../config/database");
const Product = require("../models/Product");
const Type = require("../models/Type");

module.exports = {
product:{
  get: function(req,res){
    let loggedIn = req.loggedIn;
    
        res.render("create.hbs",{loggedIn});
    },
    post: function(req,res){
        let body = req.body;
        // console.log(body);
    
            Product(body).save()
            .then((result)=>{
                // console.log(result);
                res.redirect("/");
            });


    },
},
   
  
    type:{
        get: function(req,res){
            let loggedIn = req.loggedIn;
            res.render("createType.hbs",{loggedIn});
        },
        post: function(req,res){
            let body = req.body;
            console.log(body);
           
                new Type(body).save().then((result)=>{
                    console.log(result);
                    res.redirect("/");
                });
 
        },
    }
};

