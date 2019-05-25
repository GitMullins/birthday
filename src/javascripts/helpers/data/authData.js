import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = document.getElementById('authDiv');
const birfdayDiv = document.getElementById('birfdayDiv');
const birfdayNavbar = document.getElementById('birfdayNavbar');
const authNavbar = document.getElementById('authNavbar');
const logoutNavbar = document.getElementById('logoutNavbar');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.error('user found');
      authDiv.classList.add('hide');
      birfdayDiv.classList.remove('hide');
      birfdayNavbar.classList.remove('hide');
      authNavbar.classList.add('hide');
      logoutNavbar.classList.remove('hide');
    } else {
      console.error('nope');
      authDiv.classList.remove('hide');
      birfdayDiv.classList.add('hide');
      birfdayNavbar.classList.add('hide');
      authNavbar.classList.remove('hide');
      logoutNavbar.classList.add('hide');
    }
  });
};

export default { checkLoginStatus };
