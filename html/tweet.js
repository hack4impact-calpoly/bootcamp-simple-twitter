const URL = `${document.location.origin}/api/tweet`;

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

const post = async (path, body) => (
  fetch(URL + path, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
);

const getTweets = async () => {
  const query = new URLSearchParams(window.location.search);
  const username = query.get('username')
    ? `?username=${query.get('username')}` : '';

  fetch(URL + username)
    .then((response) => {
      if (response.status !== 200) throw new Error();
      return response.json();
    })
    .then((data) => data.forEach((tweet) => createTweet(tweet)))
    .catch(() => console.warn('Unable to get tweets'));
};

const postTweet = async () => {
  const data = {
    username: document.getElementById('tweet_name').value,
    text: document.getElementById('tweet_content').value,
  };

  post('/', data)
    .then((response) => {
      if (response.status !== 201) throw new Error();
      return response.json();
    })
    .then((tweet) => createTweet(tweet))
    .catch(() => console.warn('Unable to post tweet'));
};

const deleteTweet = async (id) => {
  post('/delete', { id })
    .then((response) => {
      if (response.status !== 204) throw new Error();
    })
    .then(() => document.getElementById(id).remove())
    .catch(() => console.warn('Unable to delete tweet'));
};

window.onload = () => getTweets();

document.addEventListener('click', (event) => {
  if (event.target.id === 'tweet') postTweet();
  if (event.target.className === 'delete') {
    // TODO: find id better
    deleteTweet(event.target.parentNode.parentNode.id);
  }
});
