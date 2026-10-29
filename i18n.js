
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./src/locales/en.json";
import ru from "./src/locales/ru.json";
import tg from "./src/locales/tg.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      tg: { translation: tg }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
