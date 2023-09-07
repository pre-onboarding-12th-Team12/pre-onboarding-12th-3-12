import React from 'react';
import { styled } from 'styled-components';
import RecommendItem from './RecommendItem';

const RecommendList: React.FC = () => {
  return (
    <StyledUl>
      <li>
        <StyledP>추천 검색어</StyledP>
      </li>
      {/* length 0 일때 사용 */}
      <NoKeyword>검색어 없음</NoKeyword>
      {/* map으로 렌더링 */}
      <RecommendItem />
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
