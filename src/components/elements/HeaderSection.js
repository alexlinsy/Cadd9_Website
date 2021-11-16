import React from 'react';
import { motion } from 'framer-motion';


const HeaderSection = ({title, borderRequired}) => {
  return (
    <motion.div className={`mt-10 py-8 ${borderRequired ? 'border-top border-bottom' : ''}`}>
      <p
        className="font-heading text-center f-32 m-0"
        style={{fontSize: '46px'}}
      >
        {title}
      </p>
    </motion.div>
  );
};

export default HeaderSection;