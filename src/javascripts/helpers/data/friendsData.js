import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const addNewFriend = friendObject => axios.post(`${firebaseUrl}/friends.json`, friendObject);

const getFriendsByUid = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/friends.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const friendsResults = results.data;
      const friends = [];
      Object.keys(friendsResults).forEach((friendId) => {
        friendsResults[friendId].id = friendId;
        friends.push(friendsResults[friendId]);
      });
      resolve(friends);
    })
    .catch(err => reject(err));
});

export default { getFriendsByUid, addNewFriend };
