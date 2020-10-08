import React, {useEffect} from 'react';
import {Navigation} from 'react-native-navigation';
import {StyleSheet, Text, View} from 'react-native';

interface IHaveComponentId {
  componentId: any;
}

const Toast: React.FC<IHaveComponentId> = ({componentId}) => {
  useEffect(() => {
    setTimeout(() => {
      Navigation.dismissOverlay(componentId);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.toast}>
        <Text style={styles.text}>Copied to clipboard</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  toast: {
    elevation: 2,
    height: 40,
    marginBottom: 80,
    marginHorizontal: 80,
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Toast;
