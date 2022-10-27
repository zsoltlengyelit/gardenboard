import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export function createI18Next() {

  const i18NextInstance = i18next.createInstance();
  i18NextInstance
    .use(new Backend(null, {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }))
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      supportedLngs: ['en'],
      fallbackLng: 'en',
      debug: false,
      defaultNS: 'translation',
      nonExplicitSupportedLngs: true,
      load: 'languageOnly',
      ns: [], // this prevents pre-load of any namespace accidentally

      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      }
    });

  return i18NextInstance;
}
