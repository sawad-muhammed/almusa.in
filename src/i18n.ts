import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import translation files
import enTranslation from '../public/locale/en.json'
import hiTranslation from '../public/locale/hi.json'
import arTranslation from '../public/locale/ar.json'

const resources = {
  en: { translation: enTranslation },
  hi: { translation: hiTranslation },
  ar: { translation: arTranslation },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    // detection: {
    //   order: ['localStorage', 'navigator'],
    //   caches: ['localStorage']
    // },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
