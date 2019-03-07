const mongoose = require('mongoose');

// connects backend code with the database
mongoose.connect('mongodb://localhost/way-farer',
  { useNewUrlParser: true })

module.exports= {
    Post: require('./Post'),
    User: require('./User')
}
