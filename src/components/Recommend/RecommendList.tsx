import React from 'react';
import { styled } from 'styled-components';
import RecommendItem from './RecommendItem';
import { Disease } from 'types';
import { useKeywordContext } from 'context/useKeywordContext';

interface listProps {
  searchList: Disease[];
  focusIndex: number;
}

const RecommendList: React.FC<listProps> = ({ searchList, focusIndex }) => {
  const { inputKeyword } = useKeywordContext();

  return (
    <StyledUl>
      <li>
        <StyledP>추천 검색어</StyledP>
      </li>
      {searchList.length === 0 || !inputKeyword ? (
        <NoKeyword>검색어 없음</NoKeyword>
      ) : (
        searchList.map((item, index) => {
          const isFocused = index === focusIndex;
          return (
            <RecommendItem
              key={item.sickCd}
              disease={item}
              $isFocused={isFocused}
            />
          );
        })
      )}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  margin-top: 10px;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
`;

const StyledP = styled.p`
  margin-bottom: 15px;
  font-size: 16px;
  color: var(--gray-600);
`;

const NoKeyword = styled.p`
  color: var(--gray-800);
`;

export default RecommendList;
