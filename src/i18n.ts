import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import translation files
import enTranslation from '../public/locale/en.json'
// import esTranslation from './locales/es/translation.json'
// import frTranslation from './locales/fr/translation.json'
import hiTranslation from '../public/locale/hi.json'

const resources = {
  en: { translation: enTranslation },
//   es: { translation: esTranslation },
//   fr: { translation: frTranslation },
  hi: { translation: hiTranslation }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n