import React, {useState} from 'react';
import {Text} from 'react-native';
import {Box, Button, FlatList, Flex, Input, VStack, Center} from 'native-base';
import {searchArticle} from './home.service';
import {SearchItem} from './home.models';
import {SearchItem as SearchItemComponent} from '../../components/SearchItem';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const [results, setResults] = useState<SearchItem[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation<any>();

  const handleSearch = (): void => {
    setLoading(true);
    searchArticle(searchQuery)
      .then(res => setResults(res.data.query.search))
      .catch(_e => {
        // @Dev: Best way to handle error is to implement axios interceptors.
        // TODO: Implement Axios interceptor to catch errors, based on error codes
        // can easily create popup accordingly
        console.log('An Error has occured');
      })
      .finally(() => setLoading(false));
  };

  return (
    <Flex height="full">
      <VStack padding="2" flex={1} justifyContent="center">
        <Box alignItems="center">
          <Input
            w="100%"
            py="0"
            h={45}
            onChangeText={text => setSearchQuery(text)}
            InputRightElement={
              <Button
                size="xs"
                rounded="none"
                w="1/6"
                h="full"
                disabled={!searchQuery}
                onPress={handleSearch}>
                Search
              </Button>
            }
            placeholder="Search Wiki."
          />
        </Box>
        {results.length ? (
          <FlatList
            data={results}
            renderItem={data => (
              <SearchItemComponent navigation={navigation} item={data.item} />
            )}
          />
        ) : (
          <Center flex={1}>
            <Text>{loading ? 'loading..' : 'No Results Found.'}</Text>
          </Center>
        )}
      </VStack>
    </Flex>
  );
};
