const mongoose = require('mongoose');
const {dbURL} = require("./config");
const Product = require("../models/Product");
//todo add the cubes that we feed into the db

module.exports = mongoose.connect(dbURL);

// Stopped at 2:30:08 and he was talking about scrapping the database.js file idea, and we will be trying something new after this power nap.