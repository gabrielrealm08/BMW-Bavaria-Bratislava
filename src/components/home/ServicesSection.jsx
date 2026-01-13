import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { CreditCard, FileText, Shield, Wrench, CheckCircle } from 'lucide-react'

const ServicesSection = () => {
  const { t } = useTranslation()

  const services = [
    {
      icon: CreditCard,
      title: t('services.financing'),
      description: 'Flexible payment plans tailored to your budget',
      features: ['Low interest rates', '0% down payment options', 'Quick approval']
    },
    {
      icon: FileText,
      title: t('services.leasing'),
      description: 'Business and personal leasing solutions',
      features: ['Tax benefits', 'Flexible terms', 'Latest models']
    },
    {
      icon: Shield,
      title: t('services.insurance'),
      description: 'Comprehensive coverage for your BMW',
      features: ['Full coverage', 'Accident protection', 'Theft insurance']
    },
    {
      icon: Wrench,
      title: t('services.maintenance'),
      description: 'Expert service by certified technicians',
      features: ['Genuine parts', 'Expert technicians', 'Express service']
    },
    {
      icon: CheckCircle,
      title: t('services.warranty'),
      description: 'Extended warranty programs available',
      features: ['Up to 10 years', '24/7 roadside assistance', 'Nationwide coverage']
    }
  ]

  return (
    <section className="py-20 bg-bmw-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Comprehensive services to support your BMW ownership journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-6 hover:bg-bmw-blue/10 transition-all duration-300 group"
              >
                <Icon className="w-12 h-12 text-bmw-blue mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-bmw-gray-400 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-bmw-gray-400">
                      <div className="w-1.5 h-1.5 bg-bmw-blue rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 btn-ghost py-2 px-6 w-full">Learn More</button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
