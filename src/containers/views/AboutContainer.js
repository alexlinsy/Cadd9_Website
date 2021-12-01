import React from 'react';
import {motion} from 'framer-motion';
import TeamMembers from '../../components/elements/TeamMembers';
import AboutFirstSection from '../../components/elements/AboutFistSection';
import ImageCarousel from '../../components/elements/ImageCarousel';
import ScrollAnimation from 'react-animate-on-scroll';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {aboutContent} from '../../data/about-content';
import {teamMembers} from '../../data/team-members';
import {Helmet} from 'react-helmet';

import '../../styles/views/about.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';

const AboutContainer = () => {
  const {intro, aboutImageThree, aboutImageFour} = aboutContent;
  return (
    <div className="about-container px-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cadd9 关于我们</title>
        <meta name="description" content="Cadd9 公司介绍 团队介绍" />
      </Helmet>
      <ImageCarousel />
      <div className="intro-section">
        <motion.p
          className="intro font-heading"
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
        className="py-10 flex flex-column"
      >
        <LazyLoadImage
          src={aboutImageThree}
          alt="cadd9 导语 banner"
          className="full-width"
        />
        <LazyLoadImage
          src={aboutImageFour}
          alt="cadd9 导语 banner"
          className="full-width"
        />
      </ScrollAnimation>
      <TeamMembers teams={teamMembers} />
    </div>
  );
};

export default AboutContainer;
