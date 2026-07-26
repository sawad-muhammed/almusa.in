import { useScrollToSection } from '@/hooks/useScrollToSection'
import Section from '@/components/common/Section'
import Button from '@/components/ui/Button'
import ServiceCard from '@/components/ui/ServiceCard'
import ProjectCard from '@/components/ui/ProjectCard'

export default function HomePage() {
  // CORRECT: Call the hook to get the function
  const scrollToSection = useScrollToSection()

  const services = [
    {
      title: 'Server Management',
      description: 'Setup, monitoring, and optimization of Linux and Windows systems with reliability and performance in focus.'
    },
    {
      title: 'Cloud & AWS',
      description: 'Deploy and manage secure, scalable cloud environments using AWS and modern automation practices.'
    },
    {
      title: 'Docker & Kubernetes',
      description: 'Modern application delivery with robust container orchestration and high-availability cluster setups.'
    },
  ]

  const projects = [
    {
      title: 'Pattammakudiyil Stores',
      description: 'Retail management software handled by AlmusA for efficient store operations.',
      link: 'https://shop.almusa.in'
    },
    {
      title: 'Mail Server',
      description: 'Official AlmusA mail platform providing secure and efficient communication for our team.',
      link: 'https://mail.almusa.in'
    },
    {
      title: 'Development Environment',
      description: 'Sandbox for testing and building new websites and products managed by AlmusA developers.',
      link: 'https://dev.almusa.in'
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen text-center overflow-hidden pt-16">
        <div className="aurora"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-md">
            Empowering Modern IT Infrastructure
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            AlmusA specializes in AWS, Docker, Kubernetes, and secure server management — helping businesses stay reliable and future-ready.
          </p>
          <Button onClick={() => scrollToSection('contact')}>
            Get in Touch
          </Button>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About AlmusA" bgColor="bg-[#111827]">
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          AlmusA is a professional IT services company delivering high-performance infrastructure, server automation,
          and cloud deployment solutions. We combine deep expertise with reliability and innovation to simplify complex IT ecosystems.
        </p>
      </Section>

      {/* Services Section */}
      <Section id="services" title="Our Services">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Our Projects" bgColor="bg-[#111827]">
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact Us" >
        <p className="text-gray-400 text-lg mb-6 text-center">
          Have a project in mind or want to collaborate? Get in touch with our team today.
        </p>
        <div className="space-y-3">
          <a href="mailto:support@almusa.in" className="block text-teal-400 hover:text-teal-300 text-lg text-center">
            📧 support@almusa.in
          </a>
          <a href="tel:+917356542721" className="block text-teal-400 hover:text-teal-300 text-lg text-center">
            📞 +91 7356542721
          </a>
        </div>
      </Section>
    </div>
  )
}