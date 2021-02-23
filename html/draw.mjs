const createTweetDOM = (tweet) => {
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

export default createTweetDOM;
