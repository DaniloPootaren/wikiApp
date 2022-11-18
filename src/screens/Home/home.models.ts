export type SearchItem = {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: string;
};

export type QueryResponse = {
  batchcomplete: string;
  continue: {
    sroffset: number;
    continue: string;
  };
  query: {
    searchinfo: {
      totalhits: number;
      suggestion: string;
      suggestionsnippet: string;
    };
    search: SearchItem[];
  };
};
