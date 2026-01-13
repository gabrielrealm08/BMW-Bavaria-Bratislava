import { motion } from 'framer-motion'
import { ArrowRight, Zap, Gauge, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

const FeaturedModels = () => {
  const models = [
    {
      name: 'BMW 3 Series',
      tagline: 'The Ultimate Driving Machine',
      price: '€45,900',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070',
      specs: [
        { icon: Zap, label: '0-100 km/h', value: '5.8s' },
        { icon: Gauge, label: 'Power', value: '184 HP' },
        { icon: Shield, label: 'Safety', value: '5 Stars' }
      ]
    },
    {
      name: 'BMW X5',
      tagline: 'Luxury Meets Performance',
      price: '€78,500',
      image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2076',
      specs: [
        { icon: Zap, label: '0-100 km/h', value: '4.9s' },
        { icon: Gauge, label: 'Power', value: '340 HP' },
        { icon: Shield, label: 'Safety', value: '5 Stars' }
      ]
    },
    {
      name: 'BMW i4',
      tagline: 'Electric Revolution',
      price: '€62,900',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2070',
      specs: [
        { icon: Zap, label: '0-100 km/h', value: '3.9s' },
        { icon: Gauge, label: 'Power', value: '340 HP' },
        { icon: Shield, label: 'Range', value: '590 km' }
      ]
    }
  ]

  return (
    <section className="py-20 bg-bmw-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Models</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Explore our carefully curated selection of premium BMW vehicles, each designed to deliver exceptional performance and luxury.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bmw-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold mb-1">{model.name}</h3>
                  <p className="text-sm text-bmw-gray-400">{model.tagline}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-wider text-bmw-gray-500">Starting at</span>
                  <span className="text-3xl font-bold text-bmw-blue">{model.price}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {model.specs.map((spec, i) => {
                    const Icon = spec.icon
                    return (
                      <div key={i} className="text-center">
                        <Icon className="w-5 h-5 text-bmw-blue mx-auto mb-2" />
                        <div className="text-xs text-bmw-gray-500 mb-1">{spec.label}</div>
                        <div className="text-sm font-semibold">{spec.value}</div>
                      </div>
                    )
                  })}
                </div>

                <div className="flex gap-3">
                  <Link
                    to={`/models/${model.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex-1 btn-primary py-2 text-sm text-center"
                  >
                    View Details
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 btn-secondary py-2 text-sm text-center flex items-center justify-center group"
                  >
                    <span>Test Drive</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/models" className="btn-primary inline-flex items-center">
            <span>View All Models</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedModels
