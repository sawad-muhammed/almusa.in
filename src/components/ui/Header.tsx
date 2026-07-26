import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed top-0 left-0 w-full bg-gradient-to-r from-[#0f172a] via-[#1a2f4a] to-[#0f172a] backdrop-blur-md z-50 shadow-2xl border-b border-teal-500/20 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse hover:opacity-90 transition">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-300 rounded-lg flex items-center justify-center font-bold text-white">
            A
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
            AlmusA
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 rtl:gap-reverse rtl:flex-row-reverse">
          <nav className="flex gap-8 rtl:gap-reverse">
            <NavLink 
              onClick={() => scrollToSection('about')}
              label={t('header.about')}
            />
            <NavLink 
              onClick={() => scrollToSection('services')}
              label={t('header.services')}
            />
            <NavLink 
              onClick={() => scrollToSection('projects')}
              label={t('header.projects')}
            />
            <NavLink 
              onClick={() => scrollToSection('contact')}
              label={t('header.contact')}
            />
          </nav>
          
          <div className="h-8 w-px bg-gradient-to-b from-transparent via-teal-500/50 to-transparent"></div>
          
          {/* Language Switcher - Desktop */}
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3 rtl:gap-reverse rtl:flex-row-reverse">
          <LanguageSwitcher />
          
          <button
            className="p-2 hover:bg-[#1e293b] rounded-lg transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg 
              className="w-6 h-6 text-gray-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          className={`lg:hidden bg-gradient-to-b from-[#0f172a] to-[#1a2f4a] border-t border-teal-500/20 animate-in ${isRTL ? 'rtl' : 'ltr'}`}
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-3">
            <MobileNavLink 
              onClick={() => scrollToSection('about')}
              label={t('header.about')}
            />
            <MobileNavLink 
              onClick={() => scrollToSection('services')}
              label={t('header.services')}
            />
            <MobileNavLink 
              onClick={() => scrollToSection('projects')}
              label={t('header.projects')}
            />
            <MobileNavLink 
              onClick={() => scrollToSection('contact')}
              label={t('header.contact')}
            />
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="text-gray-300 hover:text-teal-400 transition font-medium text-sm relative group"
      aria-label={`Go to ${label}`}
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-300 group-hover:w-full transition-all duration-300"></span>
    </button>
  )
}

function MobileNavLink({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left rtl:text-right px-4 py-3 text-gray-300 hover:text-teal-400 hover:bg-[#1e293b] rounded-lg transition font-medium"
      aria-label={`Go to ${label}`}
    >
      {label}
    </button>
  )
}