import Hero from './assets/Pages/Hero'
import About from './assets/Pages/About'
import Project from './assets/Pages/Project'
import Footer from './assets/Pages/Footer'
import Stack from './assets/Pages/Stack'
import Experience from './assets/Pages/Experience'
import SmoothScroll from './assets/Components/SmoothScroll'

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <SmoothScroll />
      <Hero/>
      <About/>
      <Stack/>
      <Experience/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default App
