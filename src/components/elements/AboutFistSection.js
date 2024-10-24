import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/black-and-white.css";
import "../../styles/elements/about-first-section.scss";

const AboutFirstSection = ({
  bodyImageOne,
  bodyTextOne,
  bodyImageTwo,
  bodyTextTwo,
}) => {
  return (
    <>
      <ScrollAnimation
        animateIn="fadeIn"
        duration={3}
        className="flex border-bottom about-first-section-desktop-container"
      >
        <div className="flex flex-column border-right about-first-section-image-container">
          <ScrollAnimation
            animateIn="fadeIn"
            duration={3}
            className="py-20 pr-5 border-bottom"
          >
            <LazyLoadImage
              src={bodyImageOne}
              alt="cadd9 关于我们"
              effect="black-and-white"
              className="full-width"
            />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            duration={3}
            className="pr-5"
            style={{ paddingTop: "200px", paddingBottom: "150px" }}
          >
            <LazyLoadImage
              src={bodyImageTwo}
              alt="cadd9 关于我们"
              effect="black-and-white"
              className="full-width"
            />
          </ScrollAnimation>
        </div>
        <div className="flex flex-column about-first-section-text-container">
          <ScrollAnimation
            animateIn="fadeIn"
            duration={3}
            className="py-10 pl-5 border-bottom"
          >
            {bodyTextOne.map((paragraph, i) => (
              <p className="f-24 pre-line leading-loose font-heading" key={i}>
                {paragraph}
              </p>
            ))}
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            duration={3}
            className="py-15 pl-5"
          >
            {bodyTextTwo.map((paragraph, i) => (
              <p className="f-24 pre-line font-heading leading-loose" key={i}>
                {paragraph}
              </p>
            ))}
          </ScrollAnimation>
        </div>
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        duration={3}
        className="flex flex-column border-bottom about-first-section-container flex-align-center"
      >
        <div className="about-first-section-image-container border-bottom flex-lg-max flex-column-lg-max flex-align-center-lg-max">
          <ScrollAnimation animateIn="fadeIn" duration={3} className="py-10">
            <LazyLoadImage
              src={bodyImageOne}
              alt="cadd9 关于我们"
              effect="black-and-white"
              className="full-width"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" duration={3}>
            {bodyTextOne.map((paragraph, i) => (
              <p
                className="f-24 pre-line leading-loose font-heading about-first-content-text"
                key={i}
              >
                {paragraph}
              </p>
            ))}
          </ScrollAnimation>
        </div>
        <div className="about-first-section-image-container flex-lg-max flex-column-lg-max flex-align-center-lg-max">
          <ScrollAnimation animateIn="fadeIn" duration={3} className="py-10">
            <LazyLoadImage
              src={bodyImageTwo}
              alt="cadd9 关于我们"
              effect="black-and-white"
              className="full-width"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" duration={3}>
            {bodyTextTwo.map((paragraph, i) => (
              <p
                className="f-24 pre-line leading-loose font-heading about-first-content-text"
                key={i}
              >
                {paragraph}
              </p>
            ))}
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
    </>
  );
};

export default AboutFirstSection;
