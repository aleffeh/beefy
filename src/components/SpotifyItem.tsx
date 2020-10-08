import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import showToast from '../utils/showToast';
import {Clipboard} from '@react-native-community/clipboard/dist/Clipboard';

interface ISpotifyItem {
  item: any;
  callback?: (value: string) => {};
}

export const SpotifyItem: React.FC<ISpotifyItem> = ({item}) => {
  const [pressed, setPressed] = useState(false);

  const onPress = () => {
    Clipboard.setString(item.external_urls.spotify);
    showToast();
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}>
      {pressed && <View style={styles.pressedOverlay} />}

      <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.album.images[1].url}} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>
            {item.name.length > 40
              ? `${item.name.substr(0, 40)} ...`
              : item.name}
          </Text>
          <View style={styles.artistsContainer}>
            {item.artists.map((artist: any) => {
              return <Text style={styles.artistText}>{artist.name}; </Text>;
            })}
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressedOverlay: {
    opacity: 0.2,
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 100,
    right: 10,
    left: 10,
    bottom: 10,
    top: 10,
  },
  container: {
    display: 'flex',
    margin: 10,
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    width: 72,
    height: 72,
  },
  infoContainer: {
    justifyContent: 'center',
    marginStart: 10,
  },
  title: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  artistsContainer: {
    flexDirection: 'row',
  },
  artistText: {
    color: '#fff',
    opacity: 0.7,
  },
});
