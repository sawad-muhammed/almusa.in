import { useScrollToSection } from '@/hooks/useScrollToSection'
import Section from '@/components/common/Section'
import Button from '@/components/ui/Button'
import ServiceCard from '@/components/ui/ServiceCard'
import ProjectCard from '@/components/ui/ProjectCard'
import { useTranslation } from 'react-i18next'
// import LanguageSwitcher from '@/components/ui/LanguageSwitcher'


export default function HomePage() {
  const { t } = useTranslation()
  // CORRECT: Call the hook to get the function
  const scrollToSection = useScrollToSection()

  const services = [
    {
      title: t('services.serverManagement.title'),
      description: t('services.serverManagement.description')
    },
    {
      title: t('services.cloudAWS.title'),
      description: t('services.cloudAWS.description')
    },
    {
      title: t('services.docker.title'),
      description: t('services.docker.description')
    },
  ]

  const projects = [
    {
      title: t('projects.stores.title'),           
      description: t('projects.stores.description'), 
      link: 'https://shop.almusa.in',
      icon: '🏪'
    },
    {
      title: t('projects.mail.title'),           
      description: t('projects.mail.description'), 
      link: 'https://mail.almusa.in',
      icon: '📧'
    },
    {
      title: t('projects.dev.title'),           
      description: t('projects.dev.description'), 
      link: 'https://dev.almusa.in',
      icon: '💻'
    },
  ]


  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen text-center overflow-hidden pt-16">
        <div className="aurora"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-md">
            {/* Empowering Modern IT Infrastructure */}
            {t('hero.title')}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <Button onClick={() => scrollToSection('contact')}>
            {t('hero.cta')}
          </Button>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title={t('about.title')} bgColor="bg-[#111827]">
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          {t('about.content')}
        </p>
      </Section>

      {/* Services Section */}
      <Section id="services" title={t('services.title')} bgColor="bg-[#0f172a]">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title={t('projects.title')} bgColor="bg-[#111827]">
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title={t('contact.title')} >
        <p className="text-gray-400 text-lg mb-6 text-center">
          {t('contact.subtitle')}
        </p>
        <div className="space-y-3">
          <a href={t('contact.emailLink')} className="block text-teal-400 hover:text-teal-300 text-lg text-center">
            {t('contact.email')}
          </a>
          <a href={t('contact.phoneLink')} className="block text-teal-400 hover:text-teal-300 text-lg text-center">
            {t('contact.phone')}
          </a>
        </div>
      </Section>
    </div>
  )
}