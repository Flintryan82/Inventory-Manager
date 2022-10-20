const db = require("../config/database");
const Type = require("../models/Type");
const Product = require("../models/Product");

module.exports = {
    get: function(req,res){
        let loggedIn = req.loggedIn;
        let productId = req.params.productId;
        Type.find({products:{$nin:[productId]}}).lean().then(types=>{
            let hasTypes = types.length>0?true:false;
            context = {
                productId,
                hasTypes,
                types,
                loggedIn
            };
        res.render("attatchType.hbs",context);
        });
  
    },
    post: function(req,res){
        let productId = req.params.productId;
        let body = req.body;
        console.log(body);
        Product.findById(productId).then(product=>{
            product.types.push(body.type);
            return product.save();
        }).then(()=>{
            Type.findById(body.type).then(type=>{
                type.products.push(productId);
                return type.save();
            }).then(()=>{
                res.redirect(`/details/${productId}`);
            });
        });
    },
};