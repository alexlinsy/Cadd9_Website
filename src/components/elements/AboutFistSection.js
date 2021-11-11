import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const AboutFirstSection = ({content}) => {
  const {aboutImageOne, aboutImageTwo, aboutContentOne, aboutContentTwo} =
    content;

  return (
    <ScrollAnimation
      animateIn="fadeIn"
      duration={5}
      className="flex botder-bottom"
    >
      <div className="flex flex-column border-right">
        <ScrollAnimation
          animateIn="fadeIn"
          duration={5}
          className="py-20 pr-5 border-bottom"
        >
          <img src={aboutImageOne} alt="about" />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          duration={5}
          className="pr-5"
          style={{paddingTop: '150px', paddingBottom: '150px'}}
        >
          <img src={aboutImageTwo} alt="about" />
        </ScrollAnimation>
      </div>
      <div className="flex flex-column">
        <ScrollAnimation
          animateIn="fadeIn"
          duration={5}
          className="py-10 pl-5 border-bottom"
        >
          <p className="f-28 pre-line leading-loose">{aboutContentOne}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={5} className="py-15 pl-5">
          <p className="f-28 pre-line leading-loose">{aboutContentTwo}</p>
        </ScrollAnimation>
      </div>
    </ScrollAnimation>
  );
};

export default AboutFirstSection;
