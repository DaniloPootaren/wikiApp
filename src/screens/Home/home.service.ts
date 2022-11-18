import axios from 'axios';
import {QueryResponse} from './home.models';

export const searchArticle = (
  searchQuery: string,
): Promise<{data: QueryResponse}> => {
  return axios.get(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&srlimit=20&srsearch=${searchQuery}`,
  );
};
