const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connects backend code with the database
mongoose.connect('mongodb://localhost/way-farer',
  { useNewUrlParser: true })


// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    message: String
  },
  { timestamps: true }
);
// export the new Schema so we could modify it using Node.js
// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);

module.exports= {
    Post: require('./Post'),
    User: require('./User')
}
