import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { styled } from 'styled-components';

type InputProps = {
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
};

const Input: React.FC<InputProps> = () => {
  return (
    <StyledLabel>
      <StyledInput type="text" autoFocus placeholder="검색어를 입력하세요" />
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
