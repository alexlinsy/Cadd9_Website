import React from 'react';
import {motion} from 'framer-motion';
import ImageCarousel from '../../components/elements/ImageCarousel';
import {aboutContent} from '../../data/about-content';
import '../../styles/views/about.scss';

const AboutContainer = () => {
  const {intro} = aboutContent;
  return (
    <div className="about-container">
      <ImageCarousel />
      <div className="intro-section">
        <motion.p
          className="intro"
          initial={{y: 20, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 2}}
        >
          {intro}
        </motion.p>
      </div>
    </div>
  );
};

export default AboutContainer;
