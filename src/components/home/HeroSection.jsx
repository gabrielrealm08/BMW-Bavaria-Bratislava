import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  const { t } = useTranslation()
  const [currentHeadline, setCurrentHeadline] = useState(0)
  
  const headlines = [
    t('hero.headline1'),
    t('hero.headline2'),
    t('hero.headline3')
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [headlines.length])

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-bmw-black/70 via-bmw-black/50 to-bmw-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070"
          alt="BMW"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 z-20 overflow-hidden opacity-5">
        <div className="flex items-center h-full animate-scroll whitespace-nowrap">
          <span className="text-[200px] font-bold mx-8">INNOVATION</span>
          <span className="text-[200px] font-bold mx-8">PERFORMANCE</span>
          <span className="text-[200px] font-bold mx-8">EXCELLENCE</span>
          <span className="text-[200px] font-bold mx-8">LUXURY</span>
          <span className="text-[200px] font-bold mx-8">INNOVATION</span>
          <span className="text-[200px] font-bold mx-8">PERFORMANCE</span>
          <span className="text-[200px] font-bold mx-8">EXCELLENCE</span>
          <span className="text-[200px] font-bold mx-8">LUXURY</span>
        </div>
      </div>

      <div className="relative z-30 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 h-32 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentHeadline}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-8xl lg:text-9xl font-bold text-gradient"
              >
                {headlines[currentHeadline]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-bmw-gray-300 mb-12 font-light tracking-wide"
          >
            {t('hero.subheadline')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/models" className="btn-primary w-full sm:w-auto">
              {t('hero.exploreModels')}
            </Link>
            <Link to="/contact" className="btn-secondary w-full sm:w-auto">
              {t('hero.bookTestDrive')}
            </Link>
            <Link to="/contact" className="btn-ghost w-full sm:w-auto">
              {t('hero.contactSales')}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={scrollToContent}
          >
            <div className="flex flex-col items-center space-y-2 animate-bounce">
              <span className="text-sm uppercase tracking-wider text-bmw-gray-400">Scroll to explore</span>
              <ChevronDown className="w-6 h-6 text-bmw-blue" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
