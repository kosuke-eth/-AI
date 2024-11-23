import React, { createContext, useState, useCallback } from 'react';
import i18n from 'i18next';

type LanguageContextType = {
    lang: string;   // 言語: ja, en, chi
    changeLang: (lang: string) => void;
};

const defaultLanguageContext: LanguageContextType = {
    lang: "ja",
    // 初期値を作成するが、eslintに引っかかる
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    changeLang: () => {},
};

//custom Hook
export const langContext = createContext<LanguageContextType>(defaultLanguageContext);

// custom Hook
export const useLang = (): LanguageContextType => {
    const [lang, setLang] = useState("ja");
    const changeLang = useCallback((current: string): void => {
      setLang(current);
      i18n.changeLanguage(current);
    }, []);
    
    return {
      lang,
      changeLang,
    };
  };