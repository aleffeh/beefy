import {Navigation} from 'react-native-navigation';
import React from 'react';
import {RecoilRoot} from 'recoil';

import Home from './src/screens/Home';

export function recoil(OriginalReactComponent) {
  return function Component(props) {
    return (
      <RecoilRoot>
        <OriginalReactComponent {...props} />
      </RecoilRoot>
    );
  };
}

Navigation.registerComponent('Home', () => recoil(Home), Home);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {component: {name: 'Home'}},
  });
});
