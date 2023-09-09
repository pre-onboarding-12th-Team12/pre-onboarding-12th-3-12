interface SearchItem {
  sickNm: string;
}

interface KeyEventsProps {
  searchList: SearchItem[];
  focusIndex: number;
  setFocusIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsAutoWord: React.Dispatch<React.SetStateAction<boolean>>;
  setAutoSearchWord: React.Dispatch<React.SetStateAction<string>>;
  setListToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const createKeyEvent = ({
  searchList,
  focusIndex,
  setFocusIndex,
  setIsAutoWord,
  setAutoSearchWord,
  setListToggle,
}: KeyEventsProps) => ({
  ArrowDown() {
    if (searchList.length === 0) return;
    setIsAutoWord(true);
    let nextFocus;

    if (focusIndex + 1 >= searchList.length) {
      nextFocus = 0;
    } else {
      nextFocus = focusIndex + 1;
    }

    setFocusIndex(nextFocus);

    const nextKeyword = searchList[nextFocus]?.sickNm || '';
    setAutoSearchWord(nextKeyword);
  },
  ArrowUp() {
    if (focusIndex <= -1) return;

    let prevFocus;
    if (focusIndex === 0) {
      prevFocus = searchList.length - 1; // If at the start of the list, go to the end
      setIsAutoWord(true);
      const prevKeyword = searchList[prevFocus]?.sickNm || '';
      setAutoSearchWord(prevKeyword);
    } else {
      prevFocus = focusIndex - 1;
      const prevKeyword = searchList[prevFocus]?.sickNm || '';

      setIsAutoWord(true);
      setAutoSearchWord(prevKeyword);
    }

    setFocusIndex(prevFocus);
  },
  Escape() {
    setIsAutoWord(false);
    setAutoSearchWord('');
    setFocusIndex(() => -1);
    setListToggle(prev => !prev);
  },
  Backspace() {
    setIsAutoWord(false);
    setAutoSearchWord('');
    setFocusIndex(() => -1);
  },
});

export default createKeyEvent;
