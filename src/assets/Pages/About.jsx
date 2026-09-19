
import { motion } from 'framer-motion'
const About = () => {
    return (
        <div className="bg-[#FFFBEB] min-h-[50vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12 w-full overflow-x-hidden">
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}

                className="max-w-8xl mx-auto mb-12 w-full">
                <p
                    className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl text-center  font-light break-words">
                    Transforming ideas into seamless digital experiences                </p>
            </motion.div>

            <div className="w-full max-w-6xl mx-auto border-t border-gray-400 pt-8 flex flex-col md:flex-row justify-between items-start">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 , delay: 0.2 }}
                viewport={{ once: true }}
                 className="md:w-1/3 mb-8 md:mb-0">
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-2">This is me</p>
                    <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold">Hi, I'm Sanchit</h2>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 , delay: 0.4 }}
                viewport={{ once: true }}


                className="md:w-2/3 md:pl-12">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-4">
                        Frontend Developer with hands-on experience building responsive production websites and web applications using React.js, JavaScript, Tailwind CSS, GSAP, REST APIs, and modern frontend technologies. Experienced in reusable components, responsive UI, animations, API integration, debugging, Git/GitHub, deployment, and cloud-based media management.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                        B.Tech in Computer Engineering — Bhagwan Mahavir University, Surat | CGPA: 7.77 / 10 | May 2026 – Present | 2022 – 2026
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default About