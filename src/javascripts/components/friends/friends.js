import firebase from 'firebase/app';
import 'firebase/auth';
import friendsData from '../../helpers/data/friendsData';
import util from '../../helpers/util';

const createNewFriend = (e) => {
  e.preventDefault();
  const newFriend = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    uid: firebase.auth().currentUser.uid,
  };
  friendsData.addNewFriend(newFriend)
    .then(() => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('birthday').classList.remove('hide');
      document.getElementById('new-friend').classList.add('hide');
    })
    .catch(err => console.error('no new friend for you', err));
};

const newFriendBtn = () => {
  document.getElementById('birthday').classList.add('hide');
  document.getElementById('new-friend').classList.remove('hide');
  document.getElementById('saveNewFriend').addEventListener('click', createNewFriend);
};

const showFriends = (friends) => {
  let domString = '<button id="add-friend-btn" class="btn btn-danger">Add Friend</button>';
  friends.forEach((friend) => {
    domString += `<h3>${friend.name}</h3>`;
  });
  util.printToDom('friends', domString);
  document.getElementById('add-friend-btn').addEventListener('click', newFriendBtn);
};

const getFriends = (uid) => {
  friendsData.getFriendsByUid(uid)
    .then((friends) => {
      console.error('friends array', friends);
      showFriends(friends);
    })
    .catch(err => console.error('no friends', err));
};

export default { getFriends };
