const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const Tweet = require('./models/tweet');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
}).then(() => console.log('Connected to MongoDB'));

app.use(express.static('html'));
app.use(bodyParser.json());

const getTweets = async () => {
  console.warn('TODO: get all tweets');
};

const getUserTweets = async (username) => {
  console.warn('TODO: get all tweets from a specific user');
};

const createTweet = async (username, text) => {
  console.warn('TODO: create a tweet with a given username and text');
};

const deleteTweet = async (id) => {
  console.warn('TODO: delete a single tweet, given the id');
};

/*
 * Tweet endpoints
 */
app.get('/api/tweet', async (req, res) => {
  const { username } = req.query;

  let tweets;
  if (username === undefined) tweets = await getTweets();
  else tweets = await getUserTweets(username);

  res.json(tweets);
});

app.post('/api/tweet', async (req, res) => {
  const { text, username } = req.body;

  const tweet = await createTweet(username, text);
  res.json(tweet);
});

app.post('/api/tweet/delete', async (req, res) => {
  const { id } = req.body;
  await deleteTweet(id);
  res.send();
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running at http://localhost:${port}`));
