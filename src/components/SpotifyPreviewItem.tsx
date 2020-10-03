import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import React from 'react';
import Clipboard from '@react-native-community/clipboard';
import {Navigation} from 'react-native-navigation';

interface ISpotifyPreviewItem {
  item: any;
  callback?: (value: string) => {};
}

export const SpotifyPreviewItem: React.FC<ISpotifyPreviewItem> = ({item}) => {
  const onPress = () => {
    Clipboard.setString(item.external_urls.spotify);
    Navigation.showOverlay({
      component: {
        name: 'Toast',
        options: {
          overlay: {
            interceptTouchOutside: false,
          },
          layout: {
            componentBackgroundColor: 'transparent',
          },
        },
      },
    });
  };

  return (
    <TouchableNativeFeedback onPress={() => onPress()}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.album.images[1].url}} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 60,
    margin: 2,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  image: {
    width: 64,
    height: 64,
  },
  infoContainer: {},
  title: {},
});
