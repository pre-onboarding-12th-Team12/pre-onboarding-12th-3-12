import React, { useCallback, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import SearchForm from 'components/SearchForm/SearchForm';
import RecommendList from 'components/Recommend/RecommendList';
import { useKeywordContext } from 'context/useKeywordContext';
import { getKeyword } from 'api/search';
import { debounce } from 'lodash';
import { Disease } from 'types';

const SearchHome: React.FC = () => {
  const { inputKeyword } = useKeywordContext();
  const [searchList, setSearchList] = useState<Disease[]>([]);

  const Debounce = useCallback(
    debounce((value: string) => getData(value), 1000),
    []
  );

  const getData = async (value: string) => {
    const list = await getKeyword(value);

    setSearchList(list);
  };

  useEffect(() => {
    Debounce(inputKeyword);
  }, [inputKeyword]);

  return (
    <Wrapper>
      <h1>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
      </h1>
      <SearchForm />
      <RecommendList searchList={searchList} />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  max-width: 700px;
  margin: 100px auto;

  h1 {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 36px;
    text-align: center;
    line-height: 1.6;
  }
`;

export default SearchHome;
