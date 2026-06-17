import { useState } from 'react'
import Hero from './assets/Pages/Hero'
import About from './assets/Pages/About'
import Project from './assets/Pages/Project'
import Footer from './assets/Pages/Footer'
import Stack from './assets/Pages/Stack'
import Experience from './assets/Pages/Experience'
import SmoothScroll from './assets/Components/SmoothScroll'
import Preloader from './assets/Components/Preloader'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {/* Preloader — sits on top, unmounts when animation ends */}
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}

      {/* Main site — fades + slides up once preloader is gone */}
      <div
        className="overflow-x-hidden transition-all duration-700 ease-out"
        style={{
          opacity: isLoading ? 0 : 1,
          transform: isLoading ? 'translateY(18px)' : 'translateY(0px)',
        }}
      >
        <SmoothScroll />
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Project />
        <Footer />
      </div>
    </>
  )
}

export default App
