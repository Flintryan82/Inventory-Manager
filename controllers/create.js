//This is gonne have a post request
const db = require("../config/database");
const Product = require("../models/Product");
const Type = require("../models/Type");

module.exports = {
product:{
  get: function(req,res){
        res.render("create.hbs");
    },
    post: function(req,res){
        let body = req.body;
        // console.log(body);
    
            new Product(body).save()
            .then((result)=>{
                // console.log(result);
                res.redirect("/");
            });


    }   
},
   
  
    type:{
        get: function(req,res){
            res.render("createType.hbs")
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

