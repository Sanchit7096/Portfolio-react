import React from 'react'

const Stack = () => {
  return (
    <div className='bg-[#FFFBEB] min-h-[60vh] px-5 py-16 w-full'>
      <div className="max-w-7xl mx-auto">
        <h1 className='text-black text-5xl font-light mb-16'>My Skills ...</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1: Frontend Development */}
          <div>
            <p className="text-gray-400 text-lg mb-2">01</p>
            <div className="border-b border-gray-300 mb-6"></div>
            <h2 className="text-4xl font-light text-black mb-4">Frontend Development</h2>
            <p className="text-gray-600 leading-relaxed">
              Building responsive, interactive, and scalable web applications using React, JavaScript, and Tailwind CSS. Focused on creating clean, maintainable code and delivering seamless user experiences across devices. Passionate about transforming ideas into modern, high-performance web solutions.
            </p>
          </div>

          {/* Card 2: UI Engineering */}
          <div>
            <p className="text-gray-400 text-lg mb-2">02</p>
            <div className="border-b border-gray-300 mb-6"></div>
            <h2 className="text-4xl font-light text-black mb-4">UI Engineering</h2>
            <p className="text-gray-600 leading-relaxed">
              Creating accessible and user-centered interfaces with a strong emphasis on usability, performance, and responsiveness. Experienced in optimizing web applications for speed, accessibility, and smooth interactions. Dedicated to designing intuitive digital experiences that enhance user engagement and satisfaction.
            </p>
          </div>

          {/* Card 3: Tools & Collaboration */}
          <div>
            <p className="text-gray-400 text-lg mb-2">03</p>
            <div className="border-b border-gray-300 mb-6"></div>
            <h2 className="text-4xl font-light text-black mb-4">Tools & Collaboration</h2>
            <p className="text-gray-600 leading-relaxed">
              Developing fast and reliable AI-powered applications by integrating LLMs and modern AI technologies into web products. Proficient with Git, GitHub, VS Code, Antigravity, Windsurf, and Figma to streamline development, collaboration, and design workflows. Continuously exploring emerging technologies to build innovative and efficient solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stack
