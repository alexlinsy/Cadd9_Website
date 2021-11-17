import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/elements/header-section.scss';

const HeaderSection = ({title, borderRequired}) => {
  return (
    <motion.div className={`mt-10 py-8 full-width ${borderRequired ? 'border-top border-bottom' : ''}`}>
      <p
        className="font-heading text-center m-0 header-text"
      >
        {title}
      </p>
    </motion.div>
  );
};

export default HeaderSection;