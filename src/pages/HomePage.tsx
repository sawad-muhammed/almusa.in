export default function HomePage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
          <button
            onClick={() => scrollToSection('contact')}
            className="mt-8 inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition cursor-pointer"
          >
            Get in Touch
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-[#111827]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-teal-400 mb-6">About AlmusA</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            AlmusA is a professional IT services company delivering high-performance infrastructure, server automation,
            and cloud deployment solutions. We combine deep expertise with reliability and innovation to simplify complex IT ecosystems.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#0d1117] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-teal-400 mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#1e293b] rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-white mb-3">Server Management</h3>
              <p className="text-gray-400">Setup, monitoring, and optimization of Linux and Windows systems with reliability and performance in focus.</p>
            </div>
            <div className="p-6 bg-[#1e293b] rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-white mb-3">Cloud & AWS</h3>
              <p className="text-gray-400">Deploy and manage secure, scalable cloud environments using AWS and modern automation practices.</p>
            </div>
            <div className="p-6 bg-[#1e293b] rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-white mb-3">Docker & Kubernetes</h3>
              <p className="text-gray-400">Modern application delivery with robust container orchestration and high-availability cluster setups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-[#111827]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-teal-400 mb-10">Our Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="https://shop.almusa.in" target="_blank" rel="noopener noreferrer" className="block bg-[#1e293b] p-6 rounded-xl hover:shadow-lg transition transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white mb-2">Pattammakudiyil Stores</h3>
              <p className="text-gray-400">Retail management software handled by AlmusA for efficient store operations.</p>
            </a>
            <a href="https://mail.almusa.in" target="_blank" rel="noopener noreferrer" className="block bg-[#1e293b] p-6 rounded-xl hover:shadow-lg transition transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white mb-2">Mail Server</h3>
              <p className="text-gray-400">Official AlmusA mail platform providing secure and efficient communication for our team.</p>
            </a>
            <a href="https://dev.almusa.in" target="_blank" rel="noopener noreferrer" className="block bg-[#1e293b] p-6 rounded-xl hover:shadow-lg transition transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white mb-2">Development Environment</h3>
              <p className="text-gray-400">Sandbox for testing and building new websites and products managed by AlmusA developers.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#0d1117] py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-teal-400 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-400 mb-6">
            Have a project in mind or want to collaborate? Get in touch with our team today.
          </p>
          <div className="space-y-3">
            <a href="mailto:support@almusa.in" className="block text-teal-400 hover:text-teal-300 text-lg">📧 support@almusa.in</a>
            <a href="tel:+917356542721" className="block text-teal-400 hover:text-teal-300 text-lg">📞 +91 7356542721</a>
          </div>
        </div>
      </section>
    </div>
  )
}