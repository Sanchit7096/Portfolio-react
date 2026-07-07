import { useState, useEffect } from 'react'

import Hero from './assets/Pages/Hero'
import About from './assets/Pages/About'
import Project from './assets/Pages/Project'
import Footer from './assets/Pages/Footer'
import Stack from './assets/Pages/Stack'
import Experience from './assets/Pages/Experience'
import SmoothScroll from './assets/Components/SmoothScroll'
import Preloader from './assets/Components/Preloader'


const App = () => {

  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {

    const alreadyLoaded = sessionStorage.getItem("preloaderDone")


    if (!alreadyLoaded) {

      setIsLoading(true)

    }

  }, [])



  const handlePreloaderComplete = () => {

    sessionStorage.setItem("preloaderDone", "true")

    setIsLoading(false)

  }



  return (
    <>

      {isLoading && (
        <Preloader 
          onComplete={handlePreloaderComplete} 
        />
      )}


      <div
        className="overflow-x-hidden transition-all duration-700 ease-out"

        style={{
          opacity: isLoading ? 0 : 1,
          transform: isLoading 
            ? 'translateY(18px)' 
            : 'translateY(0px)',
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