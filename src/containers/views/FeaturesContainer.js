import React from 'react';
import FeatureCard from '../../components/elements/FeatureCard';
import {featuresData} from '../../data/features-data';
import ScrollAnimation from 'react-animate-on-scroll';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import '../../styles/views/features.scss';

const FeaturesContainer = () => {
  const {header1, header2, feature1, feature2, feature3, feature4} =
    featuresData;
  return (
    <div className="feature-container px-10">
      <div className="mt-10 mb-5 py-12 border-top border-bottom">
        <p
          className="font-heading text-center f-32 m-0"
          style={{fontSize: '65px'}}
        >
          {header1}
        </p>
      </div>
      <div className="flex flex-column">
        <ScrollAnimation
          className="flex flex-column-md-max flex-space-between full-width mt-5 flex-align-center"
          animateIn="fadeIn"
          duration={3}
        >
          <FeatureCard features={feature1} />
          <LazyLoadImage
            src={feature1.image}
            alt="feature-photo"
            className="feature-card-image"
          />
        </ScrollAnimation>
        <ScrollAnimation
          className="flex flex-column-md-max flex-space-between full-width mt-5 flex-align-center"
          animateIn="fadeIn"
          duration={3}
        >
          <LazyLoadImage
            src={feature2.image}
            alt="feature-photo"
            className="feature-card-image"
          />
          <FeatureCard features={feature2} />
        </ScrollAnimation>
        <ScrollAnimation
          className="flex flex-column-md-max flex-space-between full-width mt-5 flex-align-center"
          animateIn="fadeIn"
          duration={3}
        >
          <FeatureCard features={feature3} />
          <LazyLoadImage
            src={feature3.image}
            alt="feature-photo"
            className="feature-card-image"
          />
        </ScrollAnimation>
        <ScrollAnimation
          className="flex flex-column-md-max flex-space-between full-width mt-5 flex-align-center"
          animateIn="fadeIn"
          duration={3}
        >
          <LazyLoadImage
            src={feature4.image}
            alt="feature-photo"
            className="feature-card-image"
          />
          <FeatureCard features={feature4} />
        </ScrollAnimation>
        <ScrollAnimation
          className="mt-10 py-12 border-top border-bottom"
          animateIn="fadeIn"
          duration={3}
        >
          <p
            className="font-heading text-center f-32 m-0"
            style={{fontSize: '65px'}}
          >
            {header2}
          </p>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default FeaturesContainer;
