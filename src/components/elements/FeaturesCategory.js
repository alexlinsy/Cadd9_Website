import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {motion} from 'framer-motion';
import {LazyLoadImage} from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';
import '../../styles/elements/feature-category.scss';

const FeatureCategory = ({courseFeatures}) => {
  const {title, image, notes} = courseFeatures
  return (
    <ScrollAnimation
      className="mt-10 feature-category"
      animateIn="fadeIn"
      duration={3}
    >
      <motion.div
        className="flex flex-space-between"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}
      >
        {title}
      </motion.div>
      <motion.div
        className="feature-piano"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}
      >
        <LazyLoadImage
          src={image}
          alt="feature-course-image"
          className="full-width"
        />
      </motion.div>
      <ScrollAnimation
        className="feature-notes"
        animateIn="fadeIn"
        duration={3}
      >
        {notes}
      </ScrollAnimation>
    </ScrollAnimation>
  );
};

export default FeatureCategory;
