import React from 'react';
import {Navigation} from 'react-native-navigation';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

interface IToast {
  componentId: any;
}

const Toast: React.FC<IToast> = ({componentId}) => (
  <View style={styles.root}>
    <View style={styles.toast}>
      <Text style={styles.text}>Copied to clipboard !!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Navigation.dismissOverlay(componentId)}>
        <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  toast: {
    elevation: 2,
    flexDirection: 'row',
    height: 40,
    margin: 16,
    borderRadius: 20,
    backgroundColor: '#fdc314',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginLeft: 16,
  },
  button: {
    marginRight: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Toast;
