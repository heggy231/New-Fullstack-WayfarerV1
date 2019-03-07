// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitySchema = new mongoose.Schema({
    city: String,
    
})

module.exports = mongoose.model('City', CitySchema)