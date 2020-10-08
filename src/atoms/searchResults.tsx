import {atom} from 'recoil';
import {keys} from '../static/keys';

export const searchResults = atom({
  key: keys.SearchState,
  default: [],
});
