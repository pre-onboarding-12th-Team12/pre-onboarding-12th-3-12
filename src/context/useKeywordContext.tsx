import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

type KeywordContextType = {
  inputKeyword: string;
  setInputKeyword: Dispatch<SetStateAction<string>>;
};

const KeywordContext = createContext<KeywordContextType>({
  inputKeyword: '',
  setInputKeyword: () => '',
});

type InputKeywordProviderProps = {
  children: ReactNode;
};

export function useKeywordContext() {
  return useContext(KeywordContext);
}

export function KeywordProvider({ children }: InputKeywordProviderProps) {
  const [inputKeyword, setInputKeyword] = useState('');

  return (
    <KeywordContext.Provider value={{ inputKeyword, setInputKeyword }}>
      {children}
    </KeywordContext.Provider>
  );
}
