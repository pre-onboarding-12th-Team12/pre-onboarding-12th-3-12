import React, { useCallback, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Input from 'components/SearchForm/Input';
import Button from 'components/SearchForm/Button';
import RecommendList from 'components/Recommend/RecommendList';
import { getKeyword } from 'api/search';
import { debounce } from 'lodash';
import { Disease } from 'types';
import { onlyKoreanWord } from 'utils/KeywordFilter';
import { useKeywordContext } from 'context/useKeywordContext';
import createKeyEvent from 'utils/createKeyEvent';

const SearchForm: React.FC = () => {
  const { inputKeyword } = useKeywordContext();
  const [searchList, setSearchList] = useState<Disease[]>([]);
  const [focusIndex, setFocusIndex] = useState<number>(-1);
  console.log('🚀  focusIndex:', focusIndex);
  const [isAutoWord, setIsAutoWord] = useState<boolean>(false);
  const [autoSearchWord, setAutoSearchWord] = useState<string>('');
  const [listToggle, setListToggle] = useState<boolean>(false);

  const keyEventHandlers = createKeyEvent({
    searchList,
    focusIndex,
    setFocusIndex,
    setIsAutoWord,
    setAutoSearchWord,
    setListToggle,
  });

  const moveKeyboard: React.KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.nativeEvent.isComposing) return;

    const handler = keyEventHandlers[e.key as keyof typeof keyEventHandlers];
    if (handler) handler();
  };

  const Debounce = useCallback(
    debounce((value: string) => getData(value), 1000),
    []
  );

  const getData = async (value: string) => {
    if (isAutoWord) return;

    if (value.trim() !== '' && onlyKoreanWord(value)) {
      const itemlist = sessionStorage.getItem(value);
      if (!itemlist) {
        const list = await getKeyword(value);
        sessionStorage.setItem(
          value,
          JSON.stringify({
            data: list,
            timestamp: Date.now(),
          })
        );
        console.info('calling api');
        setSearchList(list);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        const result = JSON.parse(itemlist).data;
        setSearchList(result as Disease[]);
      }
    } else {
      setSearchList([]);
    }
  };

  useEffect(() => {
    if (isAutoWord) return;
    Debounce(inputKeyword);
  }, [inputKeyword]);

  const handleOnBlur = () => {
    setListToggle(false);
  };

  return (
    <>
      <StyledSearchLayout>
        <Input
          onKeyDown={moveKeyboard}
          onBlur={handleOnBlur}
          setListToggle={setListToggle}
          isAutoWord={isAutoWord}
          setIsAutoWord={setIsAutoWord}
          autoSearchWord={autoSearchWord}
        />
        <Button>검색</Button>
      </StyledSearchLayout>
      {listToggle && (
        <RecommendList searchList={searchList} focusIndex={focusIndex} />
      )}
    </>
  );
};

const StyledSearchLayout = styled.div`
  display: flex;
  flex: auto;
`;

export default SearchForm;
