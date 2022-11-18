import {HStack, VStack, Alert, Text, Box} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {SearchItem as _SearchItem} from '../../screens/Home/home.models';

export interface Props {
  item: _SearchItem;
  navigation: any;
}

export const SearchItem = (props: Props) => {
  const {item, navigation} = props;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Detail', {
          item: item,
        })
      }>
      <Alert maxW="400" status="info" colorScheme="info" my={2}>
        <VStack space={2} flexShrink={1} w="100%">
          <HStack
            flexShrink={1}
            space={2}
            alignItems="center"
            justifyContent="space-between">
            <HStack flexShrink={1} space={2} alignItems="center">
              <Alert.Icon />
              <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                {item.title}
              </Text>
            </HStack>
          </HStack>
          <Box
            pl="6"
            _text={{
              color: 'coolGray.600',
            }}>
            {item.snippet}
          </Box>
        </VStack>
      </Alert>
    </TouchableOpacity>
  );
};
