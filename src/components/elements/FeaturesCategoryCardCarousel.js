import React from 'react';
import Slider from 'react-slick';
import prevArrow from '../../assets/icons/pre-arrow.svg';
import nextArrow from '../../assets/icons/next-arrow.svg';
import FeatureCategory from './FeaturesCategory';
import {featuresData} from '../../data/features-data';

import '../../styles/elements/cases-card-carousel.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturesCategoryCardCarousel = () => {
  const {coursesFeatures} = featuresData;
  function PrevArrow({newClassName, onClick}) {
    return (
      <div className={newClassName} onClick={onClick}>
        <img className="left-arrow" src={prevArrow} alt="cadd9 left-arrow" />
      </div>
    );
  }
  function NextArrow({newClassName, onClick}) {
    return (
      <div className={newClassName} onClick={onClick}>
        <img className="right-arrow" src={nextArrow} alt="cadd9 right-arrow" />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    prevArrow: (
      <PrevArrow newClassName="custom-slick-arrow-features custom-prev-slick-arrow" />
    ),
    nextArrow: (
      <NextArrow newClassName="custom-slick-arrow-features custom-next-slick-arrow" />
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="slider-case-container">
      <Slider {...settings}>
        {coursesFeatures.map((course, index) => {
          return (<FeatureCategory courseFeatures={course} index={index} key={index} />);
        })}
      </Slider>
    </div>
  );
};

export default FeaturesCategoryCardCarousel;
