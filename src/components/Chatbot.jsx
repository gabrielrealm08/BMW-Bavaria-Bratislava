import { useState } from 'react'
import { MessageCircle, X, Send, User, Bot } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hello! Welcome to BMW Bavaria Bratislava. How can I assist you today?',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const { t } = useTranslation()

  const quickReplies = [
    'Book a Test Drive',
    'View Available Models',
    'Service Appointment',
    'Financing Options',
    'Contact Sales Team'
  ]

  const handleSendMessage = (messageText = inputMessage) => {
    if (!messageText.trim()) return

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: messageText,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')

    // Response delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: getBotResponse(messageText),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const getBotResponse = (message) => {
    const msg = message.toLowerCase()
    
    if (msg.includes('test drive') || msg.includes('book')) {
      return "I'd be happy to help you book a test drive! Please provide your name, contact number, and preferred date. Alternatively, you can fill out our online form or call us at +421 123 456 789."
    } else if (msg.includes('model') || msg.includes('car')) {
      return "We have a wide range of BMW models available including the 1 Series, 3 Series, 5 Series, 7 Series, X1, X3, X5, X7, and more. Which model interests you?"
    } else if (msg.includes('service') || msg.includes('maintenance')) {
      return "Our service center offers comprehensive maintenance, repairs, and genuine BMW parts. Would you like to schedule a service appointment?"
    } else if (msg.includes('price') || msg.includes('financing')) {
      return "We offer flexible financing and leasing options tailored to your needs. Would you like to speak with our finance specialist? You can also request a quote online."
    } else if (msg.includes('contact') || msg.includes('hours') || msg.includes('location')) {
      return "We're located at 123 BMW Street, Bratislava. Our hours are Mon-Fri: 8:00-18:00, Sat: 9:00-14:00. You can reach us at +421 123 456 789 or info@bavaria-bratislava.sk"
    } else {
      return "Thank you for your message. Our team will assist you shortly. Would you like me to connect you with a specialist?"
    }
  }

  const handleQuickReply = (reply) => {
    handleSendMessage(reply)
  }

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-bmw-blue rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
          >
            <MessageCircle className="w-8 h-8 text-white" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-bmw-gray-900 rounded-lg shadow-2xl overflow-hidden flex flex-col border border-white/10"
          >
            <div className="bg-bmw-blue p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-bmw-blue" />
                </div>
                <div>
                  <div className="font-bold text-white">Bavaria Assistant</div>
                  <div className="text-xs text-blue-100">Online • Ready to help</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' ? 'bg-bmw-blue' : 'bg-bmw-gray-800'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-bmw-blue" />
                      )}
                    </div>
                    <div className={`rounded-lg p-3 ${
                      message.type === 'user' 
                        ? 'bg-bmw-blue text-white' 
                        : 'bg-bmw-gray-800 text-white'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <span className="text-xs opacity-60 mt-1 block">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <div className="text-xs text-bmw-gray-400 mb-2">Quick Options:</div>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs px-3 py-1.5 glass-effect rounded-full hover:bg-bmw-blue transition-all duration-300"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="p-4 border-t border-white/10">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 bg-bmw-gray-800 text-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-bmw-blue placeholder-bmw-gray-500"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputMessage.trim()}
                  className="w-12 h-12 bg-bmw-blue rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="text-xs text-bmw-gray-500 mt-2 text-center">
                Need immediate assistance? Call +421 123 456 789
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot
