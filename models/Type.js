const mongoose = require('mongoose');
const Product = require("./Product");

const productTypeSchema = new mongoose.Schema({
    name: {type: String, required: true}
});
 
 
module.exports = mongoose.model('ProductType',productTypeSchema);
 