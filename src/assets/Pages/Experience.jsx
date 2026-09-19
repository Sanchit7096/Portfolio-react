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
    <div className='bg-[#FFFBEB] min-h-[60vh] px-5 py-16 w-full'>
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-black text-5xl font-light mb-16'
        >
          Experience
        </motion.h1>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border-l-2 border-gray-300 pl-8 relative"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-black rounded-full"></div>
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
                      className="text-sm text-blue-600 hover:text-blue-800 underline"
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
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
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
