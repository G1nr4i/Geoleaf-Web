import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PhonePreview from './components/PhonePreview'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import './App.css'

function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <PhonePreview />
      <Features />
      <HowItWorks />
    </div>
  )
}

export default App
