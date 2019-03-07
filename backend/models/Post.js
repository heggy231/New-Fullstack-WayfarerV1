const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    city: String,
    title: String,
    description: String,
    imageUrl: String
})

module.exports = mongoose.model('Post', PostSchema)

//Created a model for the CityPost