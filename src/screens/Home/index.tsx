import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Button>Home </Button>
    </View>
  );
};
