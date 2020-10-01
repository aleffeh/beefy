import {FlatList, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import useSearch from '../api/hooks/useSearch';
import {SpotifyPreviewItem} from '../components/SpotifyPreviewItem';

const Home: React.FC = () => {
  const [value, onChangeText] = useState('Taylor Swift');
  const response = useSearch(value);

  return (
    <View>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <FlatList
        data={response}
        renderItem={({index, item}) => {
          return <SpotifyPreviewItem key={index} item={item} />;
        }}
      />
    </View>
  );
};

export default Home;
