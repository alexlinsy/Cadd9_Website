import React from 'react';
import {motion} from 'framer-motion';

import '../../styles/elements/feature-category.scss';

const FeatureCategory = ({courseFeatures, index}) => {
  const {title, image, notes} = courseFeatures
  const variants ={
    enLarge: {
      scale: 0.5, opacity: 0, rotate: 5
    },
    normal: {
      scale: 1, opacity: 1, rotate: 0, transition: {duration: 2.5}
    },
    none: {scale: 1, opacity: 1, rotate: 0}
  }
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
          variants={variants}
          initial={'enLarge'}
          animate={'normal'}
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
