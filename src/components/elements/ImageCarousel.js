import React from "react";
import Slider from "react-slick";
import SliderImageOne from "../../assets/images/slider-image-one.png";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../styles/elements/image-carousel.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImageCarousel = ({ img }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Slider {...settings}>
        <div className="slider-image-container">
          <LazyLoadImage
            className="slider-image"
            alt="cadd9 图片 slider-one"
            src={img}
            effect="blur"
          />
        </div>
      </Slider>
    </motion.div>
  );
};

export default ImageCarousel;
