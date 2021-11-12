import React from 'react';
import Slider from 'react-slick';
import SliderImageOne from '../../assets/images/slider-image-one.png';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import '../../styles/elements/image-carousel.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="slider-image-container">
          <LazyLoadImage className="slider-image" alt="slider-one" src={SliderImageOne} effect="blur"/>
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
