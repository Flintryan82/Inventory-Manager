const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require("jsonwebtoken");
const secret = require("./config").jwtSecret;



module.exports = (app) => {
    
    //TODO: Setup the view engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
    //TODO: Setup the body parser
app.use(bodyParser.urlencoded({extended: true}));
    //TODO: Setup the static files
    app.use(express.static('static'));

    app.use(cookieParser());

    app.use((req,res,next)=>{
        let userToken = req.cookies.user;
        console.log(userToken);
        if(userToken === undefined){
            res.loggedIn = false;
            res.user = {};
        }else{
                let data = jwt.verify(userToken, secret);
                console.log(data);
                let expDate = new Date(data.exp*1000);
                // To watch patrick explain this section go to 1:32:00
                let date = new Date();
                if(expDate< date){
                    req.loggedIn = false;
                    req.user = {};

                }else{
                    req.loggedIn = true;
                    req.user = {
                        id:data._id,
                        username:data.username
                    };

                }
                console.log(date,expDate);
        }    
 next()});
};