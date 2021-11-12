import React from 'react';
import {motion} from 'framer-motion';
import TeamMembers from '../../components/elements/TeamMembers';
import AboutFirstSection from '../../components/elements/AboutFistSection';
import ImageCarousel from '../../components/elements/ImageCarousel';
import ScrollAnimation from 'react-animate-on-scroll';
import {aboutContent} from '../../data/about-content';
import {teamMembers} from '../../data/team-members';
import '../../styles/views/about.scss';

const AboutContainer = () => {
  const {intro, aboutImageThree, aboutImageFour} = aboutContent;
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
      <AboutFirstSection content={aboutContent} />
      <ScrollAnimation
        animateIn="fadeIn"
        duration={3}
        className="py-10 flex flex-column border-bottom"
      >
        <img src={aboutImageThree} alt="banner" className="full-width" />
        <img src={aboutImageFour} alt="banner" className="full-width" />
      </ScrollAnimation>
      <div>
        <TeamMembers teams={teamMembers} />
      </div>
    </div>
  );
};

export default AboutContainer;
