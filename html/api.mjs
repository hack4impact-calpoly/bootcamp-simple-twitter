import createTweet from './draw.mjs';

const URL = `${document.location.origin}/api/tweet`;

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

export { getTweets, postTweet, deleteTweet };
