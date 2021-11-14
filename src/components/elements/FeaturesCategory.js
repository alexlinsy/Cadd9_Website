import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {motion} from 'framer-motion';
import featureImagePiano from '../../assets/features/features-image-5.png';
import {LazyLoadImage} from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';
import '../../styles/elements/feature-category.scss';

const FeatureCategory = () => {
  return (
    <ScrollAnimation
      className="mt-10 feature-category"
      animateIn="fadeIn"
      duration={3}
    >
      <motion.div
        className="flex flex-space-between"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}
      >
        <div className="flex-column">
          <p className="font-heading feature-text-title feature-text mb-0">
            一对一
          </p>
          <p className="font-heading-english feature-text">Instrument</p>
          <p className="f-32 font-heading mb-0">(声乐/钢琴/吉他/贝斯/等)</p>
        </div>
        <div className="flex-column">
          <p className="font-heading feature-text feature-text-title mb-0">
            乐器课
          </p>
          <p className="font-heading-english feature-text mb-0 feature-text-study">
            study
          </p>
        </div>
      </motion.div>
      <motion.div
        className="feature-piano"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}
      >
        <LazyLoadImage src={featureImagePiano} alt="piano-image" className="full-width"/>
      </motion.div>
      <ScrollAnimation
        className="feature-notes"
        animateIn="fadeIn"
        duration={3}
      >
        <ul>
          <li className="f-16 font-heading leading-normal">
            根据不同学生适合的音乐风格分配适合的老师进行
            <span className="ml-20">一对一甚至二对一辅导</span>
          </li>
          <li className="f-16 font-heading leading-normal">
            乐器种类多 选择范围广
          </li>
        </ul>
      </ScrollAnimation>
    </ScrollAnimation>
  );
};

export default FeatureCategory;
