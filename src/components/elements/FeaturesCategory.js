import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {motion} from 'framer-motion';

import '../../styles/elements/feature-category.scss';

const FeatureCategory = ({courseFeatures, index}) => {
  const {title, image, notes} = courseFeatures
  return (
    <div
      className="mt-10 feature-category"
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
        className={`feature-piano feature-piano-${index}`}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}
      >
        <motion.img
          initial={{scale: 0.5, opacity: 0, rotate: 20}}
          animate={{scale: 1, opacity: 1, rotate: 0}}
          transition={{duration: 2}}
          src={image}
          alt="cadd9 课程特色"
          className="full-width"
        />
      </motion.div>
      <div
        className="feature-notes"
      >
        {notes}
      </div>
    </div>
  );
};

export default FeatureCategory;
