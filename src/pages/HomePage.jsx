import HeroSection from '../components/home/HeroSection'
import QuickActionBar from '../components/home/QuickActionBar'
import FeaturedModels from '../components/home/FeaturedModels'
import AboutSection from '../components/home/AboutSection'
import InteractiveExperience from '../components/home/InteractiveExperience'
import Testimonials from '../components/home/Testimonials'
import ServicesSection from '../components/home/ServicesSection'
import LocationSection from '../components/home/LocationSection'

const HomePage = () => {
  return (
    <div className="pt-20">
      <HeroSection />
      <QuickActionBar />
      <FeaturedModels />
      <AboutSection />
      <InteractiveExperience />
      <ServicesSection />
      <Testimonials />
      <LocationSection />
    </div>
  )
}

export default HomePage
