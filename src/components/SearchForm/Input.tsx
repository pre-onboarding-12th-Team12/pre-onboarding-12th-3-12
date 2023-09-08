import React, { useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { styled } from 'styled-components';
import { useKeywordContext } from 'context/useKeywordContext';
type InputProps = {
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
};

const Input: React.FC<InputProps> = () => {
  const { inputKeyword, setInputKeyword } = useKeywordContext();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 입력 값 변경 시 setInputKeyword를 호출하여 inputKeyword를 업데이트
    setInputKeyword(event.target.value);
  };
  useEffect(() => {
    // console.log('test');
  }, [inputKeyword]);
  return (
    <StyledLabel>
      <StyledInput
        onChange={handleInputChange}
        // value={inputKeyword}
        type="text"
        autoFocus
        placeholder="검색어를 입력하세요"
      />
      <AiOutlineSearch size="34" color="black" />
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
  position: relative;
  flex: 1;

  svg {
    position: absolute;
    top: 15px;
    left: 20px;
  }
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 22px 70px;
  font-size: 20px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background-color: white;
  box-sizing: border-box;
`;

export default Input;
