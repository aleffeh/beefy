import React from 'react';
import {SpotifyItem} from './SpotifyItem';
import {FlatList} from 'react-native';
import {useRecoilValue} from 'recoil';
import {searchResults} from '../atoms';

const ResultList: React.FC = () => {
  const response = useRecoilValue(searchResults);

  return (
    <FlatList
      data={response}
      renderItem={({index, item}) => <SpotifyItem key={index} item={item} />}
      bounces={true}
    />
  );
};
export default ResultList;
