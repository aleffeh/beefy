import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import useSearch from '../hooks/useSearch';
import {useSetRecoilState} from 'recoil';
import {searchResults} from '../atoms';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBox: React.FC = () => {
  const [query, onQueryChange] = useState('');
  const setRecoilState = useSetRecoilState(searchResults);

  let response = useSearch(query);
  useEffect(() => {
    setRecoilState(response);
  }, [response, setRecoilState]);

  return (
    <View style={styles.searchBar}>
      <Text>
        <Icon name={'search'} size={20} color={'#d0d0ce'} />
      </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => onQueryChange(text)}
        value={query}
        placeholder={'Artists or Songs'}
        placeholderTextColor={'#d0d0ce'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#81817d',
    paddingStart: 10,
    margin: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    color: '#d0d0ce',
    fontSize: 18,
    flex: 1,
  },
});

export default SearchBox;
