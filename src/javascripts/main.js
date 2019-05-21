import firebase from 'firebase/app';

import auth from './components/auth/auth';
import birthday from './components/birthday/birthday';

import apiKeys from './helpers/apiKeys.json';

import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  // console.error(apiKeys.firebaseKeys);
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.domStringBuilder();
  birthday.domStringBuilder();
};

init();
