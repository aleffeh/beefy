import {Navigation} from 'react-native-navigation';

const showToast = () => {
  Navigation.showOverlay({
    component: {
      name: 'Toast',
      options: {
        overlay: {
          interceptTouchOutside: false,
        },
        layout: {
          componentBackgroundColor: 'transparent',
        },
      },
    },
  });
};

export default showToast;
