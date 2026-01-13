import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const languages = [
    { code: 'sk', name: 'SK', flag: '🇸🇰' },
    { code: 'en', name: 'EN', flag: '🇬🇧' },
    { code: 'de', name: 'DE', flag: '🇩🇪' },
    { code: 'hu', name: 'HU', flag: '🇭🇺' }
  ]

  const navLinks = [
    { path: '/models', label: t('nav.models') },
    { path: '/services', label: t('nav.services') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') }
  ]

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setIsLangMenuOpen(false)
  }

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bmw-black/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-bmw-blue rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-white">BMW</span>
            </div>
            <div className="hidden md:block">
              <div className="text-xl font-bold tracking-tight">Bavaria Bratislava</div>
              <div className="text-xs text-bmw-gray-400 uppercase tracking-wider">Official Partner</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:text-bmw-blue relative group ${
                  location.pathname === link.path ? 'text-bmw-blue' : 'text-white'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-bmw-blue transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? 'w-full' : ''
                }`} />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-none glass-effect hover:bg-white/10 transition-all duration-300"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{currentLang.flag} {currentLang.name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full mt-2 right-0 glass-effect rounded-none shadow-xl overflow-hidden min-w-[120px]"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full px-4 py-3 text-left hover:bg-bmw-blue transition-colors flex items-center space-x-2 ${
                          i18n.language === lang.code ? 'bg-bmw-blue/20' : ''
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span className="text-sm font-medium">{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact" className="btn-primary">
              {t('hero.bookTestDrive')}
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-none glass-effect"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-bmw-black/98 backdrop-blur-lg border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-4 text-base font-medium uppercase tracking-wider transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-bmw-blue text-white'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-white/10">
                <div className="text-sm font-medium text-bmw-gray-400 mb-3 uppercase tracking-wider">
                  {t('nav.language') || 'Language'}
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`py-3 px-4 text-center rounded-none transition-all ${
                        i18n.language === lang.code
                          ? 'bg-bmw-blue text-white'
                          : 'glass-effect hover:bg-white/10'
                      }`}
                    >
                      <div className="text-xl mb-1">{lang.flag}</div>
                      <div className="text-xs font-medium">{lang.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block btn-primary text-center mt-4"
              >
                {t('hero.bookTestDrive')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
