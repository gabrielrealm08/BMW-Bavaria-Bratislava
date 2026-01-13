import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Award, Users, Calendar, TrendingUp } from 'lucide-react'

const AboutSection = () => {
  const { t } = useTranslation()

  const stats = [
    { icon: Calendar, value: '29+', label: 'Years of Excellence' },
    { icon: Users, value: '50,000+', label: 'Happy Customers' },
    { icon: Award, value: '150+', label: 'Awards Won' },
    { icon: TrendingUp, value: '#1', label: 'BMW Partner in Slovakia' }
  ]

  const timeline = [
    { year: '1995', title: 'Foundation', description: 'BMW Bavaria Bratislava was established as the official BMW partner in Slovakia' },
    { year: '2005', title: 'Expansion', description: 'Opened our state-of-the-art showroom and service center' },
    { year: '2015', title: 'Innovation', description: 'Introduced cutting-edge digital customer experience' },
    { year: '2025', title: 'Leadership', description: 'Became the leading premium automotive dealer in the region' }
  ]

  return (
    <section className="py-20 bg-bmw-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle max-w-3xl mx-auto">{t('about.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 glass-effect hover:bg-bmw-blue/10 transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-bmw-blue mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2 text-gradient">{stat.value}</div>
                <div className="text-sm text-bmw-gray-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <p className="text-bmw-gray-400 mb-4 leading-relaxed">
              {t('about.history')}
            </p>
            <p className="text-bmw-gray-400 mb-6 leading-relaxed">
              {t('about.mission')}
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-bmw-blue rounded-full mt-2 flex-shrink-0" />
                <p className="text-bmw-gray-400">Largest BMW inventory in Slovakia</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-bmw-blue rounded-full mt-2 flex-shrink-0" />
                <p className="text-bmw-gray-400">Certified BMW technicians and service experts</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-bmw-blue rounded-full mt-2 flex-shrink-0" />
                <p className="text-bmw-gray-400">Premium customer experience and support</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-none overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2127"
              alt="BMW Showroom"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bmw-black/60 to-transparent" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center">Our Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-effect p-6 h-full hover:bg-bmw-blue/10 transition-all duration-300">
                  <div className="text-5xl font-bold text-bmw-blue/20 mb-3">{item.year}</div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-sm text-bmw-gray-400 leading-relaxed">{item.description}</p>
                </div>
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-bmw-blue/30" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
