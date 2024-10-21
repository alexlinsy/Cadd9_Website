import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
import "../../styles/elements/case-card.scss";

const CasesExample = ({ studentName, description, offerImage }) => {
  return (
    <motion.div
      className="flex case-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <LazyLoadImage
        src={offerImage}
        alt="cadd9 录取 offer"
        effect="blur"
        className="border case-card-image"
      />
      <div className="ml-5 flex flex-column flex-space-between case-card-text">
        <div>
          <p className="f-28 bold mb-0 font-heading-english case-card-name">
            {studentName}
          </p>
        </div>
        <div className="case-intro">
          <p className="font-heading leading-normal mb-0 case-intro-text">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CasesExample;
