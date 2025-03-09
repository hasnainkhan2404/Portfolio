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
            <div className="introimg flex flex-col md:flex-row items-center justify-between">
                <div className="intro">
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

                <div className="img flex space-x-8 p-5">
                    <Tilt>
                        <img className="animate-zoomIn flex h-80 w-80 rounded-full space-x-4" src={profile} alt="" />
                    </Tilt>
                </div>
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
