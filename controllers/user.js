//This is gonne have a post request

const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secret = require("../config/config").jwtSecret;

module.exports = {

    signup:{
    get: function(req,res){
        let loggedIn = req.loggedIn;

            res.render("signup.hbs",{loggedIn});
        },
        post: function(req,res){
           let body =  req.body;
           //validation step one 
           if(body.repeatPassword != body.password){
            return console.log("Passwords must match");
           }
           //check if username is already used step two
           User.find({username:body.username}).lean().then((user)=>{
            if(user.length != 0){
                return console.log("user Already exists");
            }

            bcrypt.genSalt(9,(err,salt)=>{
                bcrypt.hash(body.password,salt,(err,hash)=>{
                    let username = body.username;
                    let password = hash;
                    new User({
                        username,
                        password
                    }).save().then((result)=>{
                        console.log(result._id);
                        res.redirect("/user/login");
                    })
                });
            });
           });
           //encrypt password and create the user step three
        }
    },
   
  
    login:{
        get: function(req,res){
            let loggedIn = req.loggedIn;
            res.render("login.hbs",{loggedIn})
        },
        post: function(req,res){
            let body = req.body;
            // console.log(body);
            let username = body.username;
            let password = body.password;
            User.findOne({username}).lean().then((user)=>{
                console.log(user);
                if(user == undefined){
                    return console.log("No User exists with this name");
                }
                let _id = user._id;
                let hash = user.password;
                // console.log(hash);

    bcrypt.compare(body.password,hash,(err, result)=>{
    // console.log(result);
    //set up jwt and put it into a cookie;
    if(err){
        return console.log(err);
    }
    if(!result){
        return console.log("password didnt match");
    }
    const payload = {
        _id,
        username,
        loggedIn:true
    };
    const options = { expiresIn: '2d'};
    const token = jwt.sign(payload,secret,options);
    res.cookie("user",token);
    res.redirect("/");
                });

               });

 
        },
    },

    logout:{
        get: function(req,res){
            res.clearCookie("user");
            res.redirect("/"); 
        }
    }
};

