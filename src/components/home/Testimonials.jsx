import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const { t } = useTranslation()

  const testimonials = [
    {
      name: 'Martin Kovác',
      role: 'BMW X5 Owner',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: 'Outstanding service from start to finish. The team at Bavaria Bratislava made my BMW purchase experience seamless and enjoyable. Highly recommended!'
    },
    {
      name: 'Jana Nová',
      role: 'BMW 3 Series Owner',
      image: 'https://i.pravatar.cc/150?img=45',
      rating: 5,
      text: 'Professional, knowledgeable, and truly customer-focused. They helped me find the perfect BMW within my budget. Five stars all the way!'
    },
    {
      name: 'Peter Horák',
      role: 'BMW i4 Owner',
      image: 'https://i.pravatar.cc/150?img=33',
      rating: 5,
      text: 'The best dealership experience I\'ve ever had. The showroom is stunning, and the staff genuinely care about finding the right car for you.'
    }
  ]

  const awards = [
    { title: 'BMW Partner of the Year', year: '2024' },
    { title: 'Customer Satisfaction Award', year: '2024' },
    { title: 'Best Luxury Dealer', year: '2023' },
    { title: 'Excellence in Service', year: '2023' }
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
          <h2 className="section-title">{t('testimonials.title')}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Don't just take our word for it - hear what our customers say
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect p-6 relative"
            >
              <Quote className="w-12 h-12 text-bmw-blue/20 absolute top-6 right-6" />
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-bmw-blue fill-bmw-blue" />
                ))}
              </div>
              <p className="text-bmw-gray-300 mb-6 leading-relaxed text-sm italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-bmw-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Awards & Recognition</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-6 text-center"
              >
                <Star className="w-8 h-8 text-bmw-blue mx-auto mb-3" />
                <div className="text-sm font-semibold mb-1">{award.title}</div>
                <div className="text-xs text-bmw-gray-500">{award.year}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
