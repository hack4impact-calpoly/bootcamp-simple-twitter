const express = require('express')
const app = express()
const bodyParser = require('body-parser')

require('dotenv').config()
const mongoose = require('mongoose')

const Tweet = require('./models/tweet')

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => console.log('Connected to MongoDB'))

app.use(express.static('html'))
app.use(bodyParser.json())

const getTweets = async () => {
  return await Tweet.find({})
}

const getUserTweets = async username => {
  return await Tweet.find({username: username})
}

const createTweet = async (username, text) => {
  return new Tweet({
    text,
    username
  }).save()
}

const deleteTweet = async id => {
  return Tweet.deleteOne({
    _id: id
  })
}

/*
 * Tweet endpoints
 */
app.get('/api/tweet', async (req, res) => {
  const username = req.query.username

  let tweets
  if (username === undefined)
    tweets = await getTweets()
  else
    tweets = await getUserTweets(username)
  res.json(tweets)
})

app.post('/api/tweet', async (req, res) => {
  const text = req.body.text
  const username = req.body.username

  const tweet = await createTweet(username, text)
  res.json(tweet)
})

app.post('/api/tweet/delete', async (req, res) => {
  const id = req.body.id
  await deleteTweet(id)
  res.send()
})

app.listen(3000)
console.log('Serving running on port 3000')
