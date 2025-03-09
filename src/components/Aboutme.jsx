import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profile from '../assets/profile.jpg';

const About = () => {
    return (
        <>
            <div className="introimg flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="intro md:w-1/2">
                    <motion.div variants={textVariant()}>
                        <h2 className={styles.sectionHeadText}>This Is Me</h2>
                    </motion.div>

                    <motion.p
                        variants={fadeIn("", "", 0.1, 1)}
                        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
                    >
                        I'm a versatile digital creator specializing in web development, mobile apps, and UI/UX design. With expertise in modern web technologies and frameworks like React and React Native, I create engaging websites and mobile applications that work seamlessly across all platforms. My proficiency in Three.js allows me to build immersive 3D web experiences that stand out. As a UI/UX designer, I utilize tools like Figma, Adobe Photoshop, and Canva to craft intuitive interfaces and compelling visual content. I also specialize in developing custom WordPress sites and Shopify e-commerce solutions. I'm passionate about combining technical expertise with creative design to deliver user-friendly digital solutions that solve real-world problems. Let's collaborate to transform your ideas into impactful digital experiences!
                    </motion.p>
                </div>

                <motion.div 
                    variants={fadeIn("left", "spring", 0.3, 1)}
                    className="img flex justify-center md:w-1/2 w-full px-4 md:px-0"
                >
                    <Tilt
                        tiltMaxAngleX={15}
                        tiltMaxAngleY={15}
                        scale={1.1}
                        transitionSpeed={450}
                        className="w-full max-w-[300px] md:max-w-[400px]"
                    >
                        <img 
                            className="w-full h-auto rounded-full shadow-lg animate-zoomIn" 
                            src={profile} 
                            alt="Profile" 
                        />
                    </Tilt>
                </motion.div>
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
