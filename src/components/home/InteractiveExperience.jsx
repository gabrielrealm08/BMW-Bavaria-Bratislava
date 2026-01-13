import { motion } from 'framer-motion'
import { Settings, GitCompare, Monitor } from 'lucide-react'

const InteractiveExperience = () => {
  const features = [
    {
      icon: Settings,
      title: 'Build Your BMW',
      description: 'Configure your dream BMW with our interactive 3D configurator',
      image: 'https://images.unsplash.com/photo-1617531653520-bd6d912c7e1d?q=80&w=2070'
    },
    {
      icon: GitCompare,
      title: 'Compare Models',
      description: 'Side-by-side comparison of specs, features, and pricing',
      image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=2127'
    },
    {
      icon: Monitor,
      title: '360° Virtual Tour',
      description: 'Explore our showroom from the comfort of your home',
      image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2127'
    }
  ]

  return (
    <section className="py-20 bg-bmw-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Interactive Experience</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Explore BMW like never before with our cutting-edge digital tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-bmw-black/60 flex items-center justify-center">
                    <Icon className="w-20 h-20 text-bmw-blue" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-bmw-gray-400 mb-4">{feature.description}</p>
                  <button className="btn-ghost py-2 px-6">Explore Now</button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default InteractiveExperience
