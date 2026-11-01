import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      id: 2,
      title: "Freelance Frontend Developer",
      company: "Dexton Technology",
      period: "May 2026 – Present",
      description: "Production business website developed for Dexton Technology; implemented responsive layouts, reusable components, interactive sections, animations, and Cloudinary-based media management. Developed and deployed GraphicX Studio, a production business website using React.js, Tailwind CSS, JavaScript, and GSAP. Built responsive UI, reusable React components, animations, interactive sections, and mobile-friendly layouts. Integrated Cloudinary for image hosting and media management to support production website assets. Contributed to frontend development, debugging, bug fixing, responsiveness improvements, and feature enhancements. Currently developing DK Computer, an e-commerce platform for pre-built PCs using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB with WhatsApp-based checkout.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "GSAP", "Cloudinary", "Git", "GitHub"],
      project: "GraphicX Studio",
      link: "https://graphicxstudio.com/"
    },
    {
      id: 1,
      title: "React.js Intern",
      company: "INAI Worlds Private Limited",
      period: "Feb 2026 – May 2026",
      description: "Developed frontend features for Miraai, an AI-powered video production platform using React.js and Tailwind CSS. Built responsive and reusable React components for interactive product sections. Implemented GSAP, ScrollTrigger, and Lenis animations to improve user interaction and visual experience. Contributed to debugging, testing, bug fixing, and frontend feature enhancements.",
      technologies: ["React.js", "Tailwind CSS", "GSAP", "ScrollTrigger", "Lenis", "Git", "GitHub"],
      project: "Miraai – AI Production Platform",
      link: "https://miraai.inaiverse.com/"
    }
  ]

  return (
    <div id="experience" className='bg-[#FFFBEB] min-h-[60vh] px-5 py-16 w-full'>
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className='text-black text-5xl font-light mb-16'
        >
          Experience
        </motion.h1>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="border-l-2 border-gray-300 pl-8 relative transition-transform duration-300 hover:translate-x-0.5"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-black rounded-full transition-transform duration-300 hover:scale-110"></div>
              <div className="mb-2">
                <h2 className="text-2xl font-bold text-black">{exp.title}</h2>
                <p className="text-lg text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
              </div>
              {exp.project && (
                <div className="mb-3">
                  <p className="text-sm font-semibold text-gray-800">Project: {exp.project}</p>
                  {exp.link && (
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
                    >
                      {exp.link}
                    </a>
                  )}
                </div>
              )}
              <p className="text-gray-700 leading-relaxed mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full transition-colors duration-200 hover:bg-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
