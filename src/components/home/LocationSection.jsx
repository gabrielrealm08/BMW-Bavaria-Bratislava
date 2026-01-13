import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const LocationSection = () => {
  return (
    <section className="py-20 bg-bmw-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Visit Our Showroom</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Experience the ultimate in automotive luxury at our state-of-the-art facility
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-96 lg:h-auto rounded-none overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42518.96815034188!2d17.085569750000002!3d48.148596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c89360aca6197%3A0x631f9b82fd884368!2sBratislava%2C%20Slovakia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BMW Bavaria Bratislava Location"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-effect p-6">
              <MapPin className="w-8 h-8 text-bmw-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-bmw-gray-400">
                123 BMW Street<br />
                Bratislava 811 07<br />
                Slovakia
              </p>
            </div>

            <div className="glass-effect p-6">
              <Phone className="w-8 h-8 text-bmw-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a href="tel:+421123456789" className="text-bmw-gray-400 hover:text-bmw-blue transition-colors">
                +421 123 456 789
              </a>
            </div>

            <div className="glass-effect p-6">
              <Mail className="w-8 h-8 text-bmw-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:info@bavaria-bratislava.sk" className="text-bmw-gray-400 hover:text-bmw-blue transition-colors">
                info@bavaria-bratislava.sk
              </a>
            </div>

            <div className="glass-effect p-6">
              <Clock className="w-8 h-8 text-bmw-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
              <div className="text-bmw-gray-400 space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">9:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-red-400">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
