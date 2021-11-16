import React from 'react';
import Slider from 'react-slick';
import prevArrow from '../../assets/icons/pre-arrow.svg';
import nextArrow from '../../assets/icons/next-arrow.svg';
import {motion} from 'framer-motion';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import '../../styles/elements/cases-card-carousel.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CasesCardCarousel = ({cases}) => {
  function PrevArrow({newClassName, onClick}) {
    return (
      <div className={newClassName} onClick={onClick}>
        <img className="left-arrow" src={prevArrow} alt="left-arrow" />
      </div>
    );
  }
  function NextArrow({newClassName, onClick}) {
    return (
      <div className={newClassName} onClick={onClick}>
        <img className="right-arrow" src={nextArrow} alt="right-arrow" />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 5,
    cssEase: "linear",
    prevArrow: (
      <PrevArrow newClassName="custom-slick-arrow custom-prev-slick-arrow" />
    ),
    nextArrow: (
      <NextArrow newClassName="custom-slick-arrow custom-next-slick-arrow" />
    ),
    responsive: [
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 2}}
      className="slider-case-container"
    >
      <Slider {...settings}>
        {cases.map((item, index) => (
          <div key={index}>
            <LazyLoadImage
              className="slider-case-image"
              alt="slider-offer"
              src={item}
              effect="blur"
            />
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default CasesCardCarousel;
