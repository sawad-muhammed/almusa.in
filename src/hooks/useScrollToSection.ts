// src/hooks/useScrollToSection.ts

export function useScrollToSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return scrollToSection
}

// USAGE:
// const scrollToSection = useScrollToSection()
// scrollToSection('contact')