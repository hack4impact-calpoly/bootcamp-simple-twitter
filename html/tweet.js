import { getTweets, postTweet, deleteTweet } from './api.mjs';

window.onload = () => getTweets();

document.addEventListener('click', (event) => {
  if (event.target.id === 'tweet') postTweet();
  if (event.target.className === 'delete') {
    // TODO: find id better
    deleteTweet(event.target.parentNode.parentNode.id);
  }
});
