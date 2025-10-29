import './App.css'
import AboutSection from './Components/AboutSection'
import BlogSection from './Components/Blog/BlogSection'
import EducationSection from './Components/EducationSection'
import LegacySection from './Components/FinalSection'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import ThirdSection from './Components/ThirsSection'

function App() {


  return (
   <>
    <div className="min-h-screen bg-[#FAFAFC]">
      <Navbar />
      <div className="">
      <div className="relative">
      <HeroSection />

      {/* Spacer so AboutVaibhav doesn't overlap fixed Hero */}
      <div className="relative bg-white z-10">
      <AboutSection/>
      </div>
    </div>
        
        <EducationSection/>
        <ThirdSection/>
        <LegacySection/>
        <BlogSection/>
        <Footer/>
      </div>
    </div>
   </>
  )
}

export default App
