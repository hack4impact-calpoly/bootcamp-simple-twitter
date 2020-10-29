const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    index: true
  },
  username: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date
  }
})

const Tweet = mongoose.model('Tweet', tweetSchema)

module.exports = Tweet
