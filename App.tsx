import React from 'react';
import {SafeAreaView} from 'react-native';
import {NativeBaseProvider, Flex, VStack} from 'native-base';
import {Router} from './src/routes';

const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Flex height="full">
          <VStack padding="2" flex={1} justifyContent="center">
            <Router />
          </VStack>
        </Flex>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default App;
