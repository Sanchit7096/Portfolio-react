import React from 'react'
import { motion } from 'framer-motion'

const stackData = [
  {
    num: "01",
    title: "Frontend",
    description: "React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Responsive Design, React Hooks, Reusable Components, REST API Integration"
  },
  {
    num: "02",
    title: "Backend Basic",
    description: "Node.js, Express.js, MongoDB"
  },
  {
    num: "03",
    title: "Animation & Media",
    description: "GSAP, ScrollTrigger, Lenis, Cloudinary"
  },
  {
    num: "04",
    title: "Tools",
    description: "Git, GitHub, VSCode, Postman, Vercel, MongoDB Compass, Prompt Engineering (Antigravity, Claude)"
  }
]

const Stack = () => {
  return (
    <div id="skills" className='bg-[#FFFBEB] min-h-[60vh] px-5 py-16 w-full'>
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className='text-black text-5xl font-light mb-16'
        >
          My Skills ...
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stackData.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="text-gray-400 text-lg mb-2">{item.num}</p>
              <div className="border-b border-gray-300 mb-6"></div>
              <h2 className="text-4xl font-light text-black mb-4">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stack
