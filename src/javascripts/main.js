import 'bootstrap';
import '../styles/main.scss';
import auth from './components/auth/auth';
import birthday from './components/birthday/birthday';

const init = () => {
  auth.domStringBuilder();
  birthday.domStringBuilder();
};

init();
