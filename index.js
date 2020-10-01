import {Navigation} from 'react-native-navigation';
import registerComponents from './src/utils/registerComponents';

registerComponents();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#fdc314',
  },
  topBar: {
    visible: false,
  },
});
