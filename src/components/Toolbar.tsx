import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Toolbar: React.FC = () => {
  return (
    <View style={styles.toolbar}>
      <Text style={styles.title}>Hello From Toolbar!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    height: 48,
    backgroundColor: '#fdc314',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default Toolbar;
