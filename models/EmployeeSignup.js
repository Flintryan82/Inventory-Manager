const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name:{type: String, required: true, },
    username:{type: String, required: true},
    password:{type: Number, required: true},
    passwordVerify:{type: String, required: true, },
    description:{type: String, required: true, },
});

module.exports = mongoose.model('EmployeeSignUp', employeeSchema);