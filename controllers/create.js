//This is gonne have a post request
const db = require("../config/database");
const Product = require("../models/Product");
const Type = require("../models/Type");

module.exports = {
product:{
  get: function(req,res){
    let loggedIn = req.loggedIn;
        let context = {
            loggedIn,
            user:req.user
        }
        res.render("create.hbs",context);
    },
    post: function(req,res){
        let body = req.body;
        // console.log(body);
        let user = req.user;
        let newProduct = {
            ...req.body,
            creatorId:user.id
        }
    
           new Product(newProduct).save()
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

