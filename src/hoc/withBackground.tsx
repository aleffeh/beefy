import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useRecoilValue} from 'recoil';
import {theme} from '../atoms';

export const withBackground = (OriginalReactComponent: any) =>
  function Component(props: any) {
    const appTheme = useRecoilValue(theme);

    const styles = StyleSheet.create({
      bg: {
        backgroundColor: appTheme.backgroundColor,
        flex: 1,
      },
    });

    return (
      <SafeAreaView style={styles.bg}>
        <OriginalReactComponent {...props} />
      </SafeAreaView>
    );
  };
