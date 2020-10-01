import {RecoilRoot} from 'recoil';
import React from 'react';

export const recoil = (OriginalReactComponent: any) =>
  function Component(props: any) {
    return (
      <RecoilRoot>
        <OriginalReactComponent {...props} />
      </RecoilRoot>
    );
  };
