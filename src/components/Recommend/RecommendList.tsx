import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import RecommendItem from './RecommendItem';
import { getKeyword } from 'api/search';
import { Disease } from 'types';

interface listProps {
  searchList: Disease[];
}

const RecommendList: React.FC<listProps> = ({ searchList }) => {
  return (
    <StyledUl>
      <li>
        <StyledP>추천 검색어</StyledP>
      </li>
      {searchList.length === 0 ? <NoKeyword>검색어 없음</NoKeyword> : null}
      {searchList.map((item, index) => {
        return <RecommendItem key={item.sickCd} disease={item} />;
      })}
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
