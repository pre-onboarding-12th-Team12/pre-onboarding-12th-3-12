import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import RecommendItem from './RecommendItem';
import { getKeyword } from 'api/search';
import { Disease } from 'types';

interface listProps {
  searchList: Disease[];
}

const RecommendList: React.FC<listProps> = ({ searchList }) => {
  // 데이터 잘 가져오지 확인하는 test code 입니다. 삭제해도 됩니다.
  useEffect(() => {
    const fetchKeyword = async () => {
      const datas = await getKeyword('암');
      console.log(datas);
    };
    fetchKeyword();
  }, []);

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
