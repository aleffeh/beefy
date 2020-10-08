import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Title: React.FC = () => {
  return <Text style={styles.title}>Search</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default Title;
