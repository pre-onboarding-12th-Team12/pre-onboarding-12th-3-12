import React from 'react';
import { styled } from 'styled-components';
import Input from 'components/SearchForm/Input';
import Button from 'components/SearchForm/Button';

const SearchForm: React.FC = () => {
  return (
    <StyledSearchLayout>
      <Input />
      <Button>검색</Button>
    </StyledSearchLayout>
  );
};

const StyledSearchLayout = styled.div`
  display: flex;
  flex: auto;
`;

export default SearchForm;
