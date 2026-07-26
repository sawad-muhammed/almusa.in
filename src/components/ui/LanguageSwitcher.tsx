import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ]

  return (
    <div className="flex gap-2 flex-wrap lg:flex-nowrap">
      {languages.map(lang => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
            i18n.language === lang.code
              ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/50'
              : 'bg-[#1e293b] text-gray-300 hover:bg-[#2d3748] hover:text-teal-300 border border-transparent hover:border-teal-500/30'
          }`}
          title={lang.name}
        >
          <span className="mr-1">{lang.flag}</span>
          <span className="hidden sm:inline">{lang.name.split(' ')[0]}</span>
        </button>
      ))}
    </div>
  )
}