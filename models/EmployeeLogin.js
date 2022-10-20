const mongoose = require('mongoose');
const Accessory = require("./Accessory");


const employeeLoginSchema = new mongoose.Schema({   // THIS WORKS>>>>>>>>>>>>>>
    // _id:{type: String},
    username:{type: String, },
    password:{type: String, },


});

module.exports = mongoose.model('EmployeeLoggedIn', employeeLoginSchema);