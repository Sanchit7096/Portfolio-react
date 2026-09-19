import React from 'react'

const Stack = () => {
  return (
    <div className='bg-[#FFFBEB] min-h-[60vh] px-5 py-16 w-full'>
      <div className="max-w-7xl mx-auto">
        <h1 className='text-black text-5xl font-light mb-16'>My Skills ...</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Card 1: Frontend Development */}
          <div>
            <p className="text-gray-400 text-lg mb-2">01</p>
            <div className="border-b border-gray-300 mb-6"></div>
            <h2 className="text-4xl font-light text-black mb-4">Frontend</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Responsive Design, React Hooks, Reusable Components, REST API Integration
            </p>
          </div>

          {/* Card 2: Backend Basic */}
          <div>
            <p className="text-gray-400 text-lg mb-2">02</p>
            <div className="border-b border-gray-300 mb-6"></div>
            <h2 className="text-4xl font-light text-black mb-4">Backend Basic</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Node.js, Express.js, MongoDB
            </p>
          </div>

          {/* Card 3: Animation & Media */}
          <div>
            <p className="text-gray-400 text-lg mb-2">03</p>
            <div className="border-b border-gray-300 mb-6"></div>
            <h2 className="text-4xl font-light text-black mb-4">Animation & Media</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              GSAP, ScrollTrigger, Lenis, Cloudinary
            </p>
          </div>

          {/* Card 4: Tools */}
          <div>
            <p className="text-gray-400 text-lg mb-2">04</p>
            <div className="border-b border-gray-300 mb-6"></div>
            <h2 className="text-4xl font-light text-black mb-4">Tools</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Git, GitHub, VSCode, Postman, Vercel, MongoDB Compass, Prompt Engineering (Antigravity, Claude)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stack
