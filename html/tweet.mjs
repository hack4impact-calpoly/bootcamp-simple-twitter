import {
  getTweetsFromServer, postTweetToServer, deleteTweetFromServer,
} from './api.mjs';

window.onload = () => getTweetsFromServer();

document.addEventListener('click', (event) => {
  if (event.target.id === 'tweet') postTweetToServer();
  if (event.target.className === 'delete') {
    // TODO: find id better
    deleteTweetFromServer(event.target.parentNode.parentNode.id);
  }
});
