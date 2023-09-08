import React, { useCallback, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Input from 'components/SearchForm/Input';
import Button from 'components/SearchForm/Button';
import RecommendList from 'components/Recommend/RecommendList';
import { getKeyword } from 'api/search';
import { debounce } from 'lodash';
import { Disease } from 'types';
import { onlyKoreanWord } from 'utils/KeywordFilter';
import { useKeywordContext } from 'context/useKeywordContext';

const SearchForm: React.FC = () => {
  const { inputKeyword } = useKeywordContext();
  const [searchList, setSearchList] = useState<Disease[]>([]);

  const Debounce = useCallback(
    debounce((value: string) => getData(value), 1000),
    []
  );

  const getData = async (value: string) => {
    if (value.trim() !== '' && onlyKoreanWord(value)) {
      const itemlist = sessionStorage.getItem(value);
      if (!itemlist) {
        const list = await getKeyword(value);
        sessionStorage.setItem(
          value,
          JSON.stringify({
            data: list,
            timestamp: Date.now(),
          })
        );
        console.info('calling api');
        setSearchList(list);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        const result = JSON.parse(itemlist).data;
        setSearchList(result as Disease[]);
      }
    }
  };
  useEffect(() => {
    Debounce(inputKeyword);
  }, [inputKeyword]);

  return (
    <>
      <StyledSearchLayout>
        <Input />
        <Button>검색</Button>
      </StyledSearchLayout>
      <RecommendList searchList={searchList} />
    </>
  );
};

const StyledSearchLayout = styled.div`
  display: flex;
  flex: auto;
`;

export default SearchForm;
