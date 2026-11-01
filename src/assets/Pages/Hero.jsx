import { motion } from 'framer-motion'
import Background from '../Components/Background'
import resume from '../Sanchit_Chaurasiya.pdf'
import CrazyButton from '../Components/CrazyButton'

const ArrowIcon = () => (
  <svg
    viewBox="0 0 14 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-1 h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1"
    aria-hidden="true"
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
)

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <Background
        beamWidth={3}
        beamHeight={30}
        beamNumber={20}
        lightColor="#ffffff"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={30}
      />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-end w-full p-4 sm:p-6 md:p-6">
        <a
          href="#contact"
          className="group flex items-center gap-1 p-4 text-sm font-semibold text-white transition-colors duration-300 hover:text-gray-200 sm:text-xs md:text-xl"
        >
          Lets Connect
          <ArrowIcon />
        </a>
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-start justify-center mt-12 sm:mt-16 md:mt-20 ml-4 sm:ml-8 md:ml-12 lg:ml-20 px-4 w-full">
        {/* Subtle Live Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white/90 font-mono select-none"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white break-words"
        >
          Sanchit Chaurasiya
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-base sm:text-lg md:text-xl text-white mt-3 sm:mt-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl break-words"
        >
          Building modern web applications with React, Node.js, and JavaScript. Passionate about creating clean, scalable, and user-focused digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <CrazyButton
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </CrazyButton>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
