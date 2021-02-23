const mongoose = require('mongoose');
const Tweet = require('./models/tweet');

const getTweets = async () => {
  throw new Error('TODO: get all tweets');
};

const getUserTweets = async (username) => {
  throw new Error('TODO: get all tweets from a specific user');
};

const createTweet = async (username, text) => {
  throw new Error('TODO: create a tweet with a given username and text');
};

const deleteTweet = async (id) => {
  throw new Error('TODO: delete a single tweet, given the id');
};

module.exports = {
  getTweets, getUserTweets, createTweet, deleteTweet,
};
