import React from 'react';
import '../../styles/views/home.scss';
import {motion} from 'framer-motion';
import HomeC from '../../assets/icons/homeC.svg';
import HomeA from '../../assets/icons/homeA.svg';
import HomeD from '../../assets/icons/homeD.svg';
import Home9 from '../../assets/icons/home9.svg';

const Home = () => (
  <div className="home">
    <motion.div
      className="home_header"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
    >
      <motion.div
        initial={{y: -400}}
        animate={{y: 0}}
        transition={{duration: 2}}
        className="home_letter home_c"
      >
        <motion.img
          src={HomeC}
          alt="cadd9_letter_c"
          whileHover={{y: -40}}
          transition={{duration: 0.5}}
        />
      </motion.div>
      <motion.div
        initial={{y: -400}}
        animate={{y: 0}}
        className="home_letter home_a"
        transition={{duration: 2.5}}
      >
        <motion.img
          src={HomeA}
          alt="cadd9_letter_a"
          whileHover={{y: 40}}
          transition={{duration: 0.5}}
        />
      </motion.div>
      <motion.div
        initial={{y: -400}}
        animate={{y: 0}}
        className="home_letter home_d"
        transition={{duration: 3}}
      >
        <motion.img
          src={HomeD}
          alt="cadd9_letter_d"
          whileHover={{y: -40}}
          transition={{duration: 0.5}}
        />
      </motion.div>
      <motion.div
        initial={{y: -400}}
        animate={{y: 0}}
        className="home_letter home_dd"
        transition={{duration: 3.5}}
      >
        <motion.img
          src={HomeD}
          alt="cadd9_letter_d"
          whileHover={{y: 40}}
          transition={{duration: 0.5}}
        />
      </motion.div>
      <motion.div
        initial={{y: -400}}
        animate={{y: 0}}
        className="home_letter home_9"
        transition={{duration: 4}}
      >
        <motion.img
          src={Home9}
          alt="cadd9_letter_9"
          whileHover={{y: 40}}
          transition={{duration: 0.5}}
        />
      </motion.div>
    </motion.div>
  </div>
);

export default Home;
