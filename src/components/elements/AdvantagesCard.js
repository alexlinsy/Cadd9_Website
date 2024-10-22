import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
import "../../styles/elements/advantages-card.scss";
import * as advantageIcons from "../../data/advantages-icons";

const AdvantagesCard = ({ advantage }) => {
  const { id, bannerImage, descriptionArr } = advantage;

  return (
    <motion.div
      className="flex flex-column advantages-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <LazyLoadImage
        src={advantageIcons[`advIcon${id}`]}
        alt="cadd9 图标"
        className="advantages-icon"
        effect="blur"
      />
      <LazyLoadImage
        src={bannerImage}
        alt="cadd9 介绍"
        className="full-width"
        effect="blur"
      />
      <div className="mt-5 advantages-description">
        <p>
          {descriptionArr.map((item, index) => {
            if (item.isBold) {
              return (
                <span className="advantages-description-bold" key={index}>
                  {item.value}
                </span>
              );
            } else {
              return <span key={index}>{item.value}</span>;
            }
          })}
        </p>
      </div>
    </motion.div>
  );
};

export default AdvantagesCard;
