import Background from '../Components/Background'
import resume from '../Sanchit_Chaurasiya.pdf'
import CrazyButton from '../Components/CrazyButton'

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
      <div className="absolute inset-0 z-10 flex flex-col items-start justify-center mt-12 sm:mt-16 md:mt-20 ml-4 sm:ml-8 md:ml-12 lg:ml-20 px-4 w-full">
        <h1
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}


          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white break-words">
          Sanchit Chaurasiya
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white mt-3 sm:mt-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl break-words">
          Building modern web applications with React, Node.js, and JavaScript. Passionate about creating clean, scalable, and user-focused digital experiences.
        </p>
        <CrazyButton
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </CrazyButton>
      </div>
    </div>
  )
}

export default Hero