import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, Calendar } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'test-drive'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you soon.')
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <div className="relative h-96 bg-bmw-gray-900 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-bmw-gray-400 max-w-2xl mx-auto"
          >
            Get in touch with our team to start your BMW journey
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bmw-gray-900 border border-white/10 rounded-none focus:outline-none focus:border-bmw-blue transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bmw-gray-900 border border-white/10 rounded-none focus:outline-none focus:border-bmw-blue transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-bmw-gray-900 border border-white/10 rounded-none focus:outline-none focus:border-bmw-blue transition-colors"
                  placeholder="+421 123 456 789"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">I'm interested in *</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bmw-gray-900 border border-white/10 rounded-none focus:outline-none focus:border-bmw-blue transition-colors"
                >
                  <option value="test-drive">Book a Test Drive</option>
                  <option value="purchase">Purchase a Vehicle</option>
                  <option value="service">Service Appointment</option>
                  <option value="financing">Financing Options</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-bmw-gray-900 border border-white/10 rounded-none focus:outline-none focus:border-bmw-blue transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-bmw-gray-400 mb-8">
                Our team is ready to assist you with any questions about our vehicles, services, or to schedule a test drive.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 glass-effect">
                <MapPin className="w-6 h-6 text-bmw-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Visit Us</h3>
                  <p className="text-bmw-gray-400 text-sm">
                    123 BMW Street<br />
                    Bratislava 811 07<br />
                    Slovakia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 glass-effect">
                <Phone className="w-6 h-6 text-bmw-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Call Us</h3>
                  <a href="tel:+421123456789" className="text-bmw-gray-400 text-sm hover:text-bmw-blue transition-colors">
                    +421 123 456 789
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 glass-effect">
                <Mail className="w-6 h-6 text-bmw-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Email Us</h3>
                  <a href="mailto:info@bavaria-bratislava.sk" className="text-bmw-gray-400 text-sm hover:text-bmw-blue transition-colors">
                    info@bavaria-bratislava.sk
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 glass-effect">
                <Calendar className="w-6 h-6 text-bmw-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Opening Hours</h3>
                  <div className="text-bmw-gray-400 text-sm space-y-1">
                    <div>Mon - Fri: 8:00 - 18:00</div>
                    <div>Saturday: 9:00 - 14:00</div>
                    <div>Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-bmw-blue/10 border border-bmw-blue/20">
              <h3 className="font-bold mb-3">Need Immediate Assistance?</h3>
              <p className="text-sm text-bmw-gray-400 mb-4">
                Our customer service team is available to help you right now.
              </p>
              <button className="btn-primary w-full">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
