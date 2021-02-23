const express = require('express');
const {
  getTweets, getUserTweets, createTweet, deleteTweet,
} = require('./controllers');

const router = express.Router();

const response = (res, controller, status) => (
  controller()
    .then((data) => res.status(status).json(data))
    .catch((e) => {
      console.warn(e);
      res.status(501).send(e);
    })
);

router.get('/', async (req, res) => {
  const { username } = req.query;

  if (username) response(res, () => getUserTweets(username), 200);
  else response(res, () => getTweets(), 200);
});

router.post('/', async (req, res) => {
  const { text, username } = req.body;
  response(res, () => createTweet(username, text), 201);
});

router.post('/delete', async (req, res) => {
  response(res, () => deleteTweet(req.body.id), 204);
});

module.exports = router;
