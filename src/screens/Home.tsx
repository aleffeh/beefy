import {FlatList, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import useSearch from '../api/hooks/useSearch';

const Home: React.FC = () => {
  const [value, onChangeText] = useState('Taylor Swift');
  const response = useSearch(value);

  useEffect(() => {
    console.log(response.length);
  }, [response]);

  return (
    <View>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <FlatList
        data={response}
        renderItem={({index, item: {name}}) => {
          return <Text key={index}>{name}</Text>;
        }}
      />
    </View>
  );
};

export default Home;
