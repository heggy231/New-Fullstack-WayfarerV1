const 
	mongoose = require("mongoose");
// export express here
	express = require('express'),
	cors = require('cors'),
	// this is our MongoDB database
	citypostRoutes = require('./routes/citypostsroute'),
	userRoutes = require('./routes/user'),
	bodyParser = require('body-parser');
// set var app to express() lib functions
const app = express();


// Mongodb database named dbRoute
const dbRoute = 'mongodb://localhost/way-farer'
// connects backend code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("We are connected to the database!!!"));
// error kicks in if there is connection error!
db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.use(cors());
// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

app.use('/api/cityposts', citypostRoutes)

app.use('/user', userRoutes)

//  process.env.PORT || 3001 "in production use the production port, otherwise use 3001 (for development for backend)".
app.listen(process.env.PORT || 3001, () => console.log('backEnd Server is up and running!!! Example app listening at http://localhost:3001/ :)'))