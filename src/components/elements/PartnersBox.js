import React from 'react';
import {motion} from 'framer-motion';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import '../../styles/elements/partner-box.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import 'react-lazy-load-image-component/src/effects/blur.css';

const PartnerBox = ({partner}) => {
  const variants = {
    hover: {filter: 'grayscale(0)', transition: {duration: 0.5}},
    hide: {opacity: 0},
    show: {opacity: 1, transition: {duration: 2}},
  };
  return (
    <motion.div
      className="flex flex-justify-center flex-align-center partner-box border"
      variants={variants}
      initial="hide"
      animate="show"
      whileHover="hover"
    >
      <LazyLoadImage src={partner} alt="partner-icon" effect="blur" />
    </motion.div>
  );
};

export default PartnerBox;
