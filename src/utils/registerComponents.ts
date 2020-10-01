import {Navigation} from 'react-native-navigation';
import {recoil, withToolbar} from '../hoc';
import Home from '../screens/Home';
import Toast from '../components/Toast';

const registerComponents = () => {
  Navigation.registerComponent(
    'Home',
    () => recoil(withToolbar(Home)),
    () => Home,
  );
  Navigation.registerComponent('Toast', () => Toast);
};

export default registerComponents;
