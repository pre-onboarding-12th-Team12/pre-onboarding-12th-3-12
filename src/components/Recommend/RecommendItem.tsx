import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { css, styled } from 'styled-components';
import { Disease } from 'types';
import { MarkText } from 'utils/mark';
import { useKeywordContext } from 'context/useKeywordContext';
type RecommendItemProps = {
  disease: Disease;
  $isFocused: boolean;
};

const RecommendItem: React.FC<RecommendItemProps> = ({
  disease,
  $isFocused,
}) => {
  const { inputKeyword } = useKeywordContext();

  return (
    <StyledItem $isFocused={$isFocused}>
      <AiOutlineSearch size="34" />
      <StyledButton>
        {MarkText({ text: disease.sickNm, targetWord: inputKeyword })}
      </StyledButton>
    </StyledItem>
  );
};

const StyledItem = styled.li<{ $isFocused: boolean }>`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;

  ${props =>
    props.$isFocused &&
    css`
      background-color: var(--gray-100);
      border-radius: 10px;
    `}
`;

const StyledButton = styled.button`
  font-size: 20px;
`;

export default RecommendItem;
