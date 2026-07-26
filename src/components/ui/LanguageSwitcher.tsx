import { useTranslation } from 'react-i18next'
import { useState, useRef, useEffect } from 'react'

export default function LanguageSwitcherDropdown() {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' }
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-teal-600 hover:to-cyan-500 text-white font-semibold shadow-lg shadow-teal-500/50 hover:shadow-teal-500/75 transition-all duration-300"
        aria-label="Change language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline text-sm">{currentLanguage?.name}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className="absolute top-full right-0 mt-3 w-56 bg-gradient-to-b from-[#1a2f4a] to-[#0f172a] border border-teal-500/30 rounded-xl shadow-2xl z-50 overflow-hidden backdrop-blur-sm"
          role="menu"
        >
          {/* Header */}
          <div className="px-4 py-3 border-b border-teal-500/20">
            <h3 className="text-xs font-semibold text-teal-400 uppercase tracking-wider">Select Language</h3>
          </div>

          {/* Language Options */}
          <div className="py-2">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-3 flex items-center gap-3 transition-all text-left hover:bg-teal-500/10 ${
                  i18n.language === lang.code
                    ? 'bg-teal-500/20 text-teal-300 border-l-4 border-teal-500'
                    : 'text-gray-300'
                }`}
                role="menuitem"
                aria-label={`Switch to ${lang.nativeName}`}
                aria-selected={i18n.language === lang.code}
              >
                {/* Flag */}
                <span className="text-2xl flex-shrink-0">{lang.flag}</span>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm leading-tight">{lang.name}</div>
                  <div className="text-xs text-gray-500">{lang.nativeName}</div>
                </div>

                {/* Checkmark for Active */}
                {i18n.language === lang.code && (
                  <svg className="w-5 h-5 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="px-4 py-2 border-t border-teal-500/20 bg-black/20">
            <p className="text-xs text-gray-500 text-center">3 Languages Available</p>
          </div>
        </div>
      )}
    </div>
  )
}