import {Navigation} from 'react-native-navigation';
import {recoil} from '../hoc';
import Home from '../screens/Home';
import Toast from '../components/Toast';
import {withBackground} from '../hoc/withBackground';

const registerComponents = () => {
  Navigation.registerComponent(
    'Home',
    () => recoil(withBackground(Home)),
    () => Home,
  );
  Navigation.registerComponent('Toast', () => Toast);
};

export default registerComponents;
