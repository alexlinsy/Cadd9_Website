import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../styles/elements/feature-card.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

const FeatureCard = ({ data }) => {
  const { bannerImageTitle, description } = data;
  return (
    <motion.div
      className="feature-card flex flex-column"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transations={{ duration: 2 }}
    >
      <LazyLoadImage
        src={bannerImageTitle}
        alt="cadd9 课程特色 header"
        effect="blur"
        className="full-width feature-image-text"
      />
      <p className="font-heading leading-normal mb-0 mt-2 feature-card-content">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
