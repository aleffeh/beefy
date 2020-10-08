import {atom} from 'recoil';
import {keys} from '../static/keys';

export const theme = atom({
  key: keys.Theme,
  default: {
    backgroundColor: '#292929',
  },
});
