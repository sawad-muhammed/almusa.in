import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gradient-to-r from-[#0f172a] to-[#1a2f4a] text-gray-400 py-12 border-t border-teal-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent mb-2">
              AlmusA
            </h3>
            <p className="text-sm text-gray-500">Professional IT Solutions</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-teal-400 transition">Cloud Solutions</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Server Management</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Docker & K8s</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-teal-400 transition">About Us</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition">Contact</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p><a href="mailto:support@almusa.in" className="hover:text-teal-400 transition">{t('contact.email')}</a></p>
              <p><a href="tel:+917356542721" className="hover:text-teal-400 transition">{t('contact.phone')}</a></p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>{t('footer.copyright')}</p>
            <p>{t('footer.credit')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}