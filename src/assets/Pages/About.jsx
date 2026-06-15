
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
                        Hi, I'm a Frontend Web Developer passionate about building clean and user-friendly websites. I enjoy turning ideas into interactive and responsive designs that work smoothly on all devices.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                        Even as a fresher, I focus on writing clean code, creating accessible layouts, and improving performance to offer better user experiences. I'm always learning new technologies and growing my skills to build websites that not only look great but also solve real-world problems.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default About