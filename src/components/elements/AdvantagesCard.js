import React from 'react';
import {motion} from 'framer-motion';
import {LazyLoadImage} from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';
import '../../styles/elements/advantages-card.scss';

const AdvantagesCard = ({advantagesData}) => {
  const {icon, intro, description} = advantagesData;

  return (
    <motion.div
      className="flex flex-column advantages-card"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 2}}
    >
      <LazyLoadImage
        src={icon}
        alt="number-icon"
        className="advantages-icon"
        effect="blur"
      />
      <LazyLoadImage
        src={intro}
        alt="intro"
        className="full-width"
        effect="blur"
      />
      <div className="mt-5 advantages-description">{description}</div>
    </motion.div>
  );
};

export default AdvantagesCard;
