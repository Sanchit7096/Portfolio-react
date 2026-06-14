import Hero from './assets/Pages/Hero'
import About from './assets/Pages/About'
import Project from './assets/Pages/Project'
import Footer from './assets/Pages/Footer'
import Stack from './assets/Pages/Stack'

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero/>
      <About/>
      <Stack/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default App
