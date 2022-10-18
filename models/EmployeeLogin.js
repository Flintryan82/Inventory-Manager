const mongoose = require('mongoose');
const Accessory = require("./Accessory");


const employeeLoginSchema = new mongoose.Schema({
    username:{type: String, required: true, },
    password:{type: String, required: true},
});

module.exports = mongoose.model('EmployeeLoggedIn', employeeLoginSchema);