import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "React.js Intern",
      company: "INAI Worlds Private Limited",
      period: "Feb 2026 – May 2026",
      description: "Developed an immersive, high-impact landing page for Miraai – India's first AI-powered video production service. Authored the entire frontend layer, focusing on advanced GSAP timelines to animate product galleries, value proposition sections, and dynamic creative assets. Implemented 8px spacing systems for a professional look. Managed source code using Git and GitHub version control workflows. Participated in debugging, testing, and feature enhancement activities.",
      technologies: ["React.js", "Tailwind CSS", "GSAP", "ScrollTrigger", "Lenis", "Git", "GitHub"],
      project: "Miraai – AI Production Platform Landing Page",
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
