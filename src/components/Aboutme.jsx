import React from "react";
import Tilt from "react-tilt";
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
                        I'm a skilled software developer with experience in
                        JavaScript, and expertise in frameworks like React, Node.js, and
                        Three.js. I'm a quick learner and collaborate closely with clients to
                        create efficient, scalable, and user-friendly solutions that solve
                        real-world problems. Let's work together to bring your ideas to life!
                    </motion.p>
                </div>


                <div className="img flex space-x-8 p-5">
                    <img className="animate-zoomIn flex h-80 w-80 rounded-full space-x-4" src={profile} alt="" />
                </div>




            </div>






        </>
    );
};

export default SectionWrapper(About, "about");
