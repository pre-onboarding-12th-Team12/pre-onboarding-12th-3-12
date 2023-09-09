import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import SearchForm from 'components/SearchForm/SearchForm';
import { useKeywordContext } from 'context/useKeywordContext';
const SearchHome: React.FC = () => {
  const { inputKeyword } = useKeywordContext();
  /** input에 입력시마다 세션의 검색어 만료시간 체크후 remove하는 함수 */
  function clearExpiredSessionData() {
    const oneMinuteInMillis = 60 * 5 * 1000; // 5분을 밀리초로 나타냄
    const nowTime: number = Date.now();
    for (let i = 0; i < sessionStorage.length; i++) {
      const key: string | null = sessionStorage.key(i); // sessionStorage.key의 반환 타입은 string | null
      if (!key) continue; // null인 경우 처리하지 않음
      const value: string | null = sessionStorage.getItem(key);
      if (!value) continue; // null인 경우 처리하지 않음
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const timestampFromData: number = JSON.parse(value).timestamp as number;
        if (
          timestampFromData &&
          timestampFromData + oneMinuteInMillis <= nowTime
        ) {
          sessionStorage.removeItem(key);
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    }
  }
  useEffect(() => {
    clearExpiredSessionData();
  }, [inputKeyword]);
  return (
    <Wrapper>
      <h1>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
      </h1>
      <SearchForm />
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
