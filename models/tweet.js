const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  // tweet model goes here
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
