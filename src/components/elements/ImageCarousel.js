import React from 'react';
import Slider from 'react-slick';
import SliderImageOne from '../../assets/images/slider-image-one.png';
import '../../styles/elements/image-carousel.scss';

const ImageCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
   
    
    speed: 500,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="slider-image-container">
          <img className="slider-image" src={SliderImageOne} alt="slider-one"/>
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
