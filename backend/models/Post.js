// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
    city: String,
    title: String,
    description: String,
    imageUrl: String
})

module.exports = mongoose.model('Post', PostSchema)

//Created a model for the CityPost