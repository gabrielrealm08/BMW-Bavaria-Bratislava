import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bmw-gray-900 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-bmw-blue rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">BMW</span>
              </div>
              <div>
                <div className="text-lg font-bold">Bavaria Bratislava</div>
                <div className="text-xs text-bmw-gray-400">Official Partner</div>
              </div>
            </div>
            <p className="text-sm text-bmw-gray-400 mb-4">
              Your trusted BMW partner in Slovakia since 1995. Excellence in every drive.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-bmw-blue transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-bmw-blue transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-bmw-blue transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-bmw-blue transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/models" className="text-sm text-bmw-gray-400 hover:text-bmw-blue transition-colors">
                  {t('nav.models')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-bmw-gray-400 hover:text-bmw-blue transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-bmw-gray-400 hover:text-bmw-blue transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-bmw-gray-400 hover:text-bmw-blue transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              <li className="text-sm text-bmw-gray-400 hover:text-bmw-blue transition-colors cursor-pointer">
                {t('services.financing')}
              </li>
              <li className="text-sm text-bmw-gray-400 hover:text-bmw-blue transition-colors cursor-pointer">
                {t('services.leasing')}
              </li>
              <li className="text-sm text-bmw-gray-400 hover:text-bmw-blue transition-colors cursor-pointer">
                {t('services.insurance')}
              </li>
              <li className="text-sm text-bmw-gray-400 hover:text-bmw-blue transition-colors cursor-pointer">
                {t('services.maintenance')}
              </li>
              <li className="text-sm text-bmw-gray-400 hover:text-bmw-blue transition-colors cursor-pointer">
                {t('services.warranty')}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-bmw-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm text-bmw-gray-400">
                  Bratislava, Slovakia<br />
                  123 BMW Street
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-bmw-blue flex-shrink-0" />
                <a href="tel:+421123456789" className="text-sm text-bmw-gray-400 hover:text-bmw-blue transition-colors">
                  +421 123 456 789
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-bmw-blue flex-shrink-0" />
                <a href="mailto:info@bavaria-bratislava.sk" className="text-sm text-bmw-gray-400 hover:text-bmw-blue transition-colors">
                  info@bavaria-bratislava.sk
                </a>
              </li>
            </ul>
            <div className="mt-4 p-4 glass-effect rounded-none">
              <div className="text-sm font-semibold mb-2">Opening Hours</div>
              <div className="text-xs text-bmw-gray-400 space-y-1">
                <div>Mon - Fri: 8:00 - 18:00</div>
                <div>Saturday: 9:00 - 14:00</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-bmw-gray-400">
              © {currentYear} BMW Bavaria Bratislava. {t('footer.rights')}
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-bmw-gray-400 hover:text-bmw-blue transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to="/terms" className="text-sm text-bmw-gray-400 hover:text-bmw-blue transition-colors">
                {t('footer.terms')}
              </Link>
              <a href="https://www.bmw.com" target="_blank" rel="noopener noreferrer" 
                 className="text-sm text-bmw-gray-400 hover:text-bmw-blue transition-colors">
                BMW Global
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
