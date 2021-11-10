import React from 'react';
import '../../styles/views/home.scss';
import {motion} from 'framer-motion';
import HomeC from '../../assets/icons/homeC.svg';
import HomeA from '../../assets/icons/homeA.svg';
import HomeD from '../../assets/icons/homeD.svg';
import Home9 from '../../assets/icons/home9.svg';

const Home = () => (
  <div className="home">
    <div className="home_header">
      <motion.img
        src={HomeC}
        alt="cadd9_letter_c"
        className="home_letter home_c"
        whileHover={{y: -40}}
        transition={{duration: 0.5}}
      />
      <motion.img
        src={HomeA}
        alt="cadd9_letter_a"
        className="home_letter home_a"
        whileHover={{y: 40}}
        transition={{duration: 0.5}}
      />
      <motion.img
        src={HomeD}
        alt="cadd9_letter_d"
        className="home_letter home_d"
        whileHover={{y: -40}}
        transition={{duration: 0.5}}
      />
      <motion.img
        src={HomeD}
        alt="cadd9_letter_d"
        className="home_letter home_dd"
        whileHover={{y: 40}}
        transition={{duration: 0.5}}
      />
      <motion.img
        src={Home9}
        alt="cadd9_letter_9"
        className="home_letter home_9"
        whileHover={{y: 40}}
        transition={{duration: 0.5}}
      />
    </div>
  </div>
);

export default Home;
