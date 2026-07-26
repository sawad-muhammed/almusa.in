import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#0f172a] to-[#1a2f4a] backdrop-blur-md z-50 shadow-xl border-b border-teal-500/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition">
          <span className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
            {t('header.title')}
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex gap-8">
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
          
          {/* Language Switcher - Desktop */}
          <div className="h-6 w-px bg-gray-600"></div>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-[#1e293b] rounded-lg transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0f172a] border-t border-teal-500/10 animate-in">
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
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
            
            {/* Language Switcher - Mobile */}
            <div className="pt-4 border-t border-gray-700">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

// Desktop Navigation Link
function NavLink({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="text-gray-300 hover:text-teal-400 transition font-medium text-sm relative group"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
    </button>
  )
}

// Mobile Navigation Link
function MobileNavLink({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left px-4 py-3 text-gray-300 hover:text-teal-400 hover:bg-[#1e293b] rounded-lg transition font-medium"
    >
      {label}
    </button>
  )
}