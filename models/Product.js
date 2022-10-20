const mongoose = require('mongoose');
// const Type = require("./Type");
const User = require("./User");

const productSchema = new mongoose.Schema({   // THIS WORKS>>>>>>>>>>>>>>
    // _id:{type: String},
    productName:{type: String, },
    productType:{type: String, },
    quantity:{type: Number, },
    price:{type: Number, },
    vendor:{type: String, },
    description:{type: String, },
    // imageURL : {type: String,validate: validImage},
    // types: {type:mongoose.Schema.Types.ObjectId,ref: 'Type'}
    creatorId: {type:mongoose.Schema.Types.ObjectId,ref: 'User'}
});




// function validImage(val){
// if(val.startsWith("http://")||val.startsWith("https://")){
//     return true;
// }
// return false;
// }
module.exports = mongoose.model('Product', productSchema);


