import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0f172a]/80 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition">
          <span className="text-2xl font-bold text-teal-400">AlmusA</span>
        </Link>
        
        <button
          className="md:hidden text-gray-300 hover:text-teal-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-gray-300">
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="hover:text-teal-400 transition cursor-pointer"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-teal-400 transition cursor-pointer"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="hover:text-teal-400 transition cursor-pointer"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="hover:text-teal-400 transition cursor-pointer"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {isOpen && (
          <nav className="absolute top-full left-0 right-0 bg-[#0f172a] md:hidden">
            <ul className="flex flex-col space-y-3 p-6 text-gray-300">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-teal-400 transition cursor-pointer block w-full text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-teal-400 transition cursor-pointer block w-full text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="hover:text-teal-400 transition cursor-pointer block w-full text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-teal-400 transition cursor-pointer block w-full text-left"
                >
                  Contacts
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}