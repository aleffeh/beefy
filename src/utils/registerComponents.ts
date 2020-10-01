import {Navigation} from 'react-native-navigation';
import {recoil, withToolbar} from '../hoc';
import Home from '../screens/Home';

const registerComponents = () => {
  Navigation.registerComponent(
    'Home',
    () => recoil(withToolbar(Home)),
    () => Home,
  );
};

export default registerComponents;
