import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Flex} from 'native-base';
import {WebView} from 'react-native-webview';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SearchItem} from '../Home/home.models';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webview: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    width: width,
  },
});

export const DetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<{params: {item: SearchItem}} | any>();

  navigation.setOptions({
    title: route.params.item.title,
  });

  return (
    <Flex height="full" style={styles.container}>
      <WebView
        style={styles.webview}
        startInLoadingState={true}
        source={{
          uri: `https://en.wikipedia.org/wiki/${route.params.item.title}`,
        }}
      />
    </Flex>
  );
};
