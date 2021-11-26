// Require dependencies
const mongoose = require('mongoose');


//  define moggose schema
const tweetSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: String,
    likes: { type: Number,  default: 0},
    sponsored: {type: Boolean, default: false}
}, {timestamps: true }) //options object: this is another option for the schema by default it's set to false


// compile mogoose schema into a mongoose model
module.exports = mongoose.model('Tweet', tweetSchema) 
/* 
- has the variable and the name of the schema
- allows us to perform CRUD now
*/


/*
    Tweet.create()
    Tweet.find() -finds a collection
    Tweet.findById()
    Twee.findOne() - finds one tweet
    Tweet.findByIdAndUpdate()
    Tweet.findByIdAndDelete()
*/

// use mongoose model methods to perform CRUD data operations on a mondo db colletion