// TODO, update with actual HREF
const URL = 'http://localhost:3000/api/tweet';

const createTweet = (tweet) => {
  const tweets = document.getElementById('tweets');

  const tweetBox = document.createElement('div');
  const tweetInfo = document.createElement('div');
  const usernameText = document.createElement('a');
  const deleteBox = document.createElement('span');
  const tweetText = document.createElement('div');

  tweetBox.className = 'tweet';
  tweetBox.id = tweet._id;

  usernameText.innerText = `@${tweet.username}:`;
  usernameText.className = 'username';
  usernameText.href = `?username=${tweet.username}`;

  deleteBox.innerText = 'delete';
  deleteBox.className = 'delete';
  tweetText.innerText = tweet.text;

  tweetInfo.className = 'info';
  tweetInfo.appendChild(usernameText);
  tweetInfo.appendChild(deleteBox);
  tweetBox.appendChild(tweetInfo);
  tweetBox.appendChild(tweetText);

  tweets.insertBefore(tweetBox, tweets.childNodes[0]);
};

const getTweets = async () => {
  const query = new URLSearchParams(window.location.search);
  let username;
  if (query.get('username') !== null) username = `?username=${query.get('username')}`;
  else username = '';

  fetch(URL + username)
    .then((response) => response.json())
    .then((data) => data.forEach((tweet) => createTweet(tweet)));
};

getTweets();

const postTweet = async () => {
  const data = {
    username: document.getElementById('tweet_name').value,
    text: document.getElementById('tweet_content').value,
  };

  fetch('http://localhost:3000/api/tweet', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => response.json())
    .then((tweet) => createTweet(tweet));
};

const deleteTweet = async (id) => {
  fetch('http://localhost:3000/api/tweet/delete', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  }).then(() => document.getElementById(id).remove());
};

document.addEventListener('click', (event) => {
  if (event.target.id === 'tweet') postTweet();
  if (event.target.className === 'delete') {
    const { id } = event.target.parentNode.parentNode;
    deleteTweet(id);
  }
});
