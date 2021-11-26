// Require Dependencies
const express = require('express'); //must run npm i express
const mongoose = require('mongoose'); //must run npm i mongoose
const Tweet = require('./models/tweet')


// Initialize Express App
const app = express(); //must run npm i express

// Configure Settings
// const PORT = 3000;

// Set up Port Value
require('dotenv').config();

const port = process.env.PORT || 3000 //must run npm i dotenv


// Connect to and Config MongoDB
// const DATABASE_URL = 'mongodb+srv://admin:abc1234@cluster0.itzon.mongodb.net/tweeter?retryWrites=true&w=majority';
const MONGODB_URI = process.env.MONGODB_URI

//Connect to Mono & 
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})



// Mount Middleware
// use public folder for static assets
app.use(express.static("public"))

// Populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false })) // extended: false - does not allow nested objects in query strings
app.use(express.json()) // returns middleware that only parses JSON - may or may not need it depending on your project

// Use Method-override
const methodOverride = require('method-override'); //must run npm i method-override
app.use(methodOverride('_method')) // allow POST, PUT and DELETE from a form



// Set up Listeners to MondoDB Events
// shorcut variables: could either use mongoose.connection or the variable db
const db = mongoose.connection; //object that reps our database in the app
// the object contains info related to the db name, host, port and any other elevant info
db.on('connected', () => console.log('Connected to Mongodb'));
// similar to an even listener as it'll let us know when mogoose is connected

db.on('error', (error) => console.log('Mongodb Error ' + error.message));
// listens for when there is an error with moggose






// Mount Routes

// Create Route
// app.post('/tweets', (req, res) => {
//     Tweet.create(req.body, (err, createdTweet) => { //Tweet is the model and tweet is the actual tweet data
//         res.send(createdTweet);
//     }); //req.body stand for the data that the user gives us
// });

//Index Route
app.get("/", (req, res) => {
    res.send("Hello World!")
  });
// app.get('/tweets', (req, res) => {
//     Tweet.find({}, (err, arrayOfTweets) => { //Tweet is the model and tweets is plural bc it's all the tweets
//         res.send(arrayOfTweets);
//     }); //the empty query object {} tells it that we want everything

// });

// Show Route
// app.get('/tweets/:id', (req, res) => {
//     Tweet.findById(req.params.id, (err, foundTweet) => {
//         res.send(foundTweet);
//     });
// });

// Delete Route
// app.delete('/tweets/:id', (req,res) => {
//     Tweet.findByIdAndDelete(req.params.id, (err, copyOfDeletedTweet) => {
//         res.send(copyOfDeletedTweet);
//     });
// });


// Update Route
// app.put('/tweets/:id', (req, res) => {
//     Tweet.findByIdAndUpdate(
//         req.params.id, 
//         req.body, 
//         { new: true },
//         (err, updatedTweet) => {
//             res.send(updatedTweet)
//     })
// })


// Tell the App to Listen
app.listen(port, () => {
    console.log(`Express is listening on port: ${port}`)
});