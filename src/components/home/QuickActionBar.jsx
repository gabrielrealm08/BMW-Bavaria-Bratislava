import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Car, Wrench, MessageSquare, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const QuickActionBar = () => {
  const { t } = useTranslation()
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > window.innerHeight - 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const actions = [
    { icon: Car, label: t('quickActions.viewInventory'), link: '/models' },
    { icon: Wrench, label: t('quickActions.bookService'), link: '/services' },
    { icon: MessageSquare, label: t('quickActions.chatAdvisor'), action: 'chat' },
    { icon: MapPin, label: t('quickActions.findUs'), link: '/contact' }
  ]

  return (
    <div
      className={`transition-all duration-300 z-40 ${
        isSticky ? 'fixed top-20 left-0 right-0 shadow-lg' : 'relative'
      }`}
    >
      <div className="bg-bmw-gray-900/95 backdrop-blur-lg border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
            {actions.map((action, index) => {
              const Icon = action.icon
              return action.link ? (
                <Link
                  key={index}
                  to={action.link}
                  className="flex items-center justify-center space-x-3 p-4 glass-effect hover:bg-bmw-blue transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-bmw-blue group-hover:text-white transition-colors" />
                  <span className="text-sm font-medium hidden sm:block">{action.label}</span>
                </Link>
              ) : (
                <button
                  key={index}
                  className="flex items-center justify-center space-x-3 p-4 glass-effect hover:bg-bmw-blue transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-bmw-blue group-hover:text-white transition-colors" />
                  <span className="text-sm font-medium hidden sm:block">{action.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickActionBar
