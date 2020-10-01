import React from 'react';
import Toolbar from '../components/Toolbar';

export const withToolbar = (OriginalReactComponent: any) =>
  function Component(props: any) {
    return (
      <>
        <Toolbar />
        <OriginalReactComponent {...props} />
      </>
    );
  };
