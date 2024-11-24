import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // React ya protege contra XSS
    },
    resources: {
      en: {
        common: require("./locales/en/common.json"),
        header: require("../../modules/header/locales/en.json"),
      },
      es: {
        common: require("./locales/es/common.json"),
        header: require("../../modules/header/locales/es.json"),
      },
    },
  });

export default i18n;
