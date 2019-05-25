import util from '../../helpers/util';

const domStringBuilder = () => {
  let domString = '';
  domString += 'BIRTHDAY';
  util.printToDom('birthday', domString);
};

export default { domStringBuilder };
