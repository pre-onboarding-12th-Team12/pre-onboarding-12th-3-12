import Http from 'api/http';
import { Disease } from 'types';

const URL = 'http://localhost:4000';

const searchHttp = new Http(URL);

export const getKeyword = async (keyword: string) => {
  return await searchHttp.get<Disease[]>('/sick', {
    params: {
      q: keyword,
      page: 1,
      _limit: 10,
    },
  });
};
