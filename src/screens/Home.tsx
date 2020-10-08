import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchBox from '../components/SearchBox';
import Title from '../components/Title';
import ResultList from '../components/ResultList';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title />
      <SearchBox />
      <View style={styles.list}>
        <ResultList />
      </View>
      <Text style={styles.footer}>beefy</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  list: {
    flex: 2,
  },
  footer: {
    fontSize: 28,
    color: '#ffd200',
    opacity: 0.8,
    fontFamily: 'Aardvark Cafe',
    alignSelf: 'center',
    margin: 10,
  },
});

export default Home;
