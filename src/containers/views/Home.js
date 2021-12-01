import React from 'react';
import {motion} from 'framer-motion';
import HomeC from '../../assets/icons/homeC.svg';
import HomeA from '../../assets/icons/homeA.svg';
import HomeD from '../../assets/icons/homeD.svg';
import Home9 from '../../assets/icons/home9.svg';
import {Helmet} from 'react-helmet-async';

import 'react-lazy-load-image-component/src/effects/blur.css';
import '../../styles/views/home.scss';

const Home = () => (
  <div className="home">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Cadd9 主页</title>
      <meta name="description" content="Cadd9 主页展示" />
    </Helmet>
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
          alt="cadd9 字母 c"
          whileHover={{y: -100}}
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
          alt="cadd9 字母 a"
          whileHover={{y: 100}}
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
          alt="cadd9 字母 d"
          whileHover={{y: -100}}
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
          alt="cadd9 字母 d"
          whileHover={{y: 100}}
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
          alt="cadd9 字母 9"
          whileHover={{y: 100}}
          transition={{duration: 0.5}}
        />
      </motion.div>
    </motion.div>
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
      className="home-header-mobile full-width flex-column"
    >
      <div className="flex letter-section-one">
        <img src={HomeC} alt="cadd9 字母 c" className="letter-section-one-c" />
        <img src={HomeA} alt="cadd9 字母 a" className="letter-section-one-a" />
        <img src={HomeD} alt="cadd9 字母 d" className="letter-section-one-d" />
        <img src={HomeD} alt="cadd9 字母 d" className="letter-section-one-dd" />
        <img src={Home9} alt="cadd9 字母 9" className="letter-section-one-9" />
      </div>
      <div className="flex flex-space-between pt-10 mobile-text-content-one">
        <p className="font-heading-english mb-0 home-mobile-text f-25">MUSIC</p>
        <p className="font-heading-english mb-0 home-mobile-text f-25">
          <span className="font-heading-english mb-0 mr-10">EDU</span>CATION
        </p>
      </div>
      <div className="flex letter-section-two">
        <img src={HomeC} alt="cadd9 字母 c" className="letter-section-two-c" />
        <img src={HomeA} alt="cadd9 字母 a" className="letter-section-two-a" />
        <img src={HomeD} alt="cadd9 字母 d" className="letter-section-two-d" />
        <img src={HomeD} alt="cadd9 字母 d" className="letter-section-two-dd" />
        <img src={Home9} alt="cadd9 字母 9" className="letter-section-two-9" />
      </div>
      <div className="flex flex-space-between mobile-home-text">
        <p className="font-heading mb-0 f-25">
          银河 <span className="font-heading-english mb-0">SOHO</span>
        </p>
        <p className="font-heading mb-0 f-25">
          <span className="font-heading-english mb-0 mr-5">D座</span>3
          <span className="font-heading-english mb-0">F</span>-50333
        </p>
      </div>
      <div className="flex letter-section-three">
        <img
          src={HomeC}
          alt="cadd9 字母 c"
          className="letter-section-three-c"
        />
        <img
          src={HomeA}
          alt="cadd9 字母 a"
          className="letter-section-three-a"
        />
        <img
          src={HomeD}
          alt="cadd9 字母 d"
          className="letter-section-three-d"
        />
        <img
          src={HomeD}
          alt="cadd9 字母 d"
          className="letter-section-three-dd"
        />
        <img
          src={Home9}
          alt="cadd9 字母 9"
          className="letter-section-three-9"
        />
      </div>
    </motion.div>
  </div>
);

export default Home;
