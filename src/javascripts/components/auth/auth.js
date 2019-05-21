import util from '../../helpers/util';

const domStringBuilder = () => {
  let domString = '';
  domString += 'AUTH';
  util.printToDom('auth', domString);
};

export default { domStringBuilder };
