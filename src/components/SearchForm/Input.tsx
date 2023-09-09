import React, { SetStateAction, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { styled } from 'styled-components';
import { useKeywordContext } from 'context/useKeywordContext';
type InputProps = {
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  setListToggle: React.Dispatch<SetStateAction<boolean>>;
  isAutoWord: boolean;
  setIsAutoWord: React.Dispatch<SetStateAction<boolean>>;
  autoSearchWord: string;
};

const Input: React.FC<InputProps> = ({
  onKeyDown,
  onBlur,
  setListToggle,
  isAutoWord,
  autoSearchWord,
}) => {
  const { inputKeyword, setInputKeyword } = useKeywordContext();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputKeyword(event.target.value);
    setListToggle(true);
  };

  useEffect(() => {
    setInputKeyword(autoSearchWord);
  }, [autoSearchWord]);

  return (
    <StyledLabel>
      <StyledInput
        onChange={handleInputChange}
        value={isAutoWord ? autoSearchWord : inputKeyword}
        type="text"
        autoFocus
        placeholder="검색어를 입력하세요"
        onKeyDown={onKeyDown}
        onBlur={onBlur}
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
