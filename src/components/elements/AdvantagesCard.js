import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';
import '../../styles/elements/advantages-card.scss';

const AdvantagesCard = ({advantagesData}) => {
  const {icon, intro, description} = advantagesData;

  return (
    <div className="flex flex-column advantages-card">
      <LazyLoadImage src={icon} alt="number-icon" className="advantages-icon" />
      <LazyLoadImage src={intro} alt="intro" className="full-width" />
      <div className="mt-5">{description}</div>
    </div>
  );
};

export default AdvantagesCard;
