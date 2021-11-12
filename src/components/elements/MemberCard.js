import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {LazyLoadImage} from 'react-lazy-load-image-component'
import '../../styles/elements/member-card.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MemberCard = ({memberInfo}) => {
  const {name, title, image, intro} = memberInfo;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="flex flex-column member-card"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      whileHover={{y: -210}}
      transition={{duration: 1}}
    >
      <div>
        <p className="f-24 bold mb-1 font-heading-english card-name">{name}</p>
        <p className="mb-2">{title}</p>
      </div>
      <div>
        <LazyLoadImage src={image} alt="avatar" className="full-width avatar" effect="blur" />
      </div>
      {isOpen && (
        <div className="member-intro">
          <motion.p
            className="leading-normal font-heading"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
          >
            {intro}
          </motion.p>
        </div>
      )}
    </motion.div>
  );
};

export default MemberCard;
