const 
    mongoose = require("mongoose");
    express = require('express'),
    cors = require('cors'),
    // this is our MongoDB database
    citypostRoutes = require('./routes/citypostsroute'),
    userRoutes = require('./routes/user'),
    bodyParser = require('body-parser');
const app = express();
// Mongodb database named dbRoute
const dbRoute = 'mongodb://localhost/way-farer'
// connects backend code with the database
mongoose.connect(dbRoute,
  { useNewUrlParser: true })



app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

app.use('/api/cityposts', citypostRoutes)

app.use('/user', userRoutes)

app.listen(3001, () => console.log('Listening on port 3001 :)'))