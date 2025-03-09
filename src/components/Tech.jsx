import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  const [visibleBalls, setVisibleBalls] = useState([]);

  useEffect(() => {
    // Load balls progressively
    const loadBalls = () => {
      technologies.forEach((tech, index) => {
        setTimeout(() => {
          setVisibleBalls(prev => [...prev, index]);
        }, index * 100); // 100ms delay between each ball
      });
    };

    loadBalls();
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Technologies I work with</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Tech Stack.</h2>
      </motion.div>

      <motion.div 
        variants={fadeIn("", "", 0.1, 1)}
        className='flex flex-row flex-wrap justify-center gap-10 mt-10'
      >
        {technologies.map((technology, index) => (
          <div 
            className='w-28 h-28' 
            key={technology.name}
            style={{
              opacity: visibleBalls.includes(index) ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }}
          >
            <BallCanvas icon={technology.icon} />
            <p className="text-center text-secondary mt-2">{technology.name}</p>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");
