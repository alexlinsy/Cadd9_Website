import React from 'react';
import {motion} from 'framer-motion';
import {LazyLoadImage} from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';
import '../../styles/elements/case-card.scss';

const CasesExample = ({caseImage, offerInfo}) => {
  const {name, intro} = offerInfo;
  return (
    <motion.div
      className="flex case-card"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 2}}
    >
      <LazyLoadImage
        src={caseImage}
        alt="cadd9 录取 offer"
        effect="blur"
        className="border case-card-image"
      />
      <div className="ml-5 flex flex-column flex-space-between case-card-text">
        <div>
          <p className="f-28 bold mb-0 font-heading-english case-card-name">
            {name}
          </p>
        </div>
        <div className="case-intro">
          <p className="font-heading leading-normal mb-0 case-intro-text">{intro}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CasesExample;
