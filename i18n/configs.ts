import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 言語jsonファイルのimport
import translation_en  from "./locals/en.json";
import translation_ja  from "./locals/ja.json";
import translation_zh from "./locals/zh.json";

const resources = {
    ja: {
      translation: translation_ja
    },
    en: {
      translation: translation_en
    },
    zh: {
        translation: translation_zh
    }
  };

  i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: resources,
    lng: "ja", 
    fallbackLng: "en",
    returnEmptyString: false,
    interpolation: {
        // 翻訳された文字列内のHTMLやReactコンポーネントをエスケープすることを無効に
              escapeValue: false
    },
  });

  export default i18n;
