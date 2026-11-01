import { useState } from 'react'

import Hero from './assets/Pages/Hero'
import About from './assets/Pages/About'
import Project from './assets/Pages/Project'
import Footer from './assets/Pages/Footer'
import Stack from './assets/Pages/Stack'
import Experience from './assets/Pages/Experience'
import SmoothScroll from './assets/Components/SmoothScroll'
import Preloader from './assets/Components/Preloader'
import ScrollProgress from './assets/Components/ScrollProgress'
import CommandPalette from './assets/Components/CommandPalette'
import Toast from './assets/Components/Toast'

const App = () => {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('preloaderDone')
    }
    return false
  })

  const [toastMessage, setToastMessage] = useState(null)

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 2500)
  }

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('preloaderDone', 'true')
    setIsLoading(false)
  }

  return (
    <>
      <ScrollProgress />
      <CommandPalette onCopyToast={showToast} />
      <Toast message={toastMessage} />

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
        <Footer onCopyToast={showToast} />
      </div>
    </>
  )
}

export default App
