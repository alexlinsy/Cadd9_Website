import React from 'react';
import FeatureCard from '../../components/elements/FeatureCard';
import {featuresData} from '../../data/features-data';
import ScrollAnimation from 'react-animate-on-scroll';
import {LazyLoadImage, LazyLoadComponent} from 'react-lazy-load-image-component';
import HeaderSection from '../../components/elements/HeaderSection';
import FeaturesCategoryCardCarousel from '../../components/elements/FeaturesCategoryCardCarousel';
import {Helmet} from 'react-helmet-async';

import 'react-lazy-load-image-component/src/effects/blur.css';
import '../../styles/views/features.scss';

const FeaturesContainer = () => {
  const {header1, header2, feature1, feature2, feature3, feature4} =
    featuresData;
  return (
    <div className="feature-container px-10">
       <Helmet>
        <meta charSet="utf-8" />
        <title>Cadd9 课程特色</title>
        <meta name="description" content="Cadd9 课程介绍 课程设计" />
      </Helmet>
      <HeaderSection title={header1} borderRequired />
      <div className="flex flex-column">
        <ScrollAnimation
          className="flex flex-column-md-max flex-space-between full-width mt-5 flex-align-center"
          animateIn="fadeIn"
          duration={3}
        >
          <FeatureCard features={feature1} />
          <div className="feature-image-container">
            <LazyLoadImage
              src={feature1.image}
              alt="cadd9 课程特色"
              className="full-width"
              effect="blur"
            />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="flex flex-column-md-max flex-space-between full-width mt-5 flex-align-center"
          animateIn="fadeIn"
          duration={3}
        >
          <div className="feature-image-container feature-image-two">
            <LazyLoadImage
              src={feature2.image}
              alt="cadd9 课程特色"
              className="full-width"
              effect="blur"
            />
          </div>
          <FeatureCard features={feature2} />
          <div className="feature-image-container feature-image-two-mobile">
            <LazyLoadImage
              src={feature2.image}
              alt="cadd9 课程特色"
              className="full-width"
              effect="blur"
            />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="flex flex-column-md-max flex-space-between full-width mt-5 flex-align-center"
          animateIn="fadeIn"
          duration={3}
        >
          <FeatureCard features={feature3} />
          <div className="feature-image-container">
            <LazyLoadImage
              src={feature3.image}
              alt="cadd9 课程特色"
              className="full-width"
              effect="blur"
            />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="flex flex-column-md-max flex-space-between full-width mt-5 flex-align-center"
          animateIn="fadeIn"
          duration={3}
        >
          <div className="feature-image-container feature-image-two">
            <LazyLoadImage
              src={feature4.image}
              alt="cadd9 课程特色"
              className="full-width"
              effect="blur"
            />
          </div>
          <FeatureCard features={feature4} />
          <div className="feature-image-container feature-image-two-mobile">
            <LazyLoadImage
              src={feature4.image}
              alt="cadd9 课程特色"
              className="full-width"
              effect="blur"
            />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="mt-10 py-8 border-top border-bottom"
          animateIn="fadeIn"
          duration={3}
        >
          <p
            className="font-heading text-center m-0 feature-header-two"
            style={{fontSize: '46px'}}
          >
            {header2}
          </p>
        </ScrollAnimation>
        <LazyLoadComponent>
          <FeaturesCategoryCardCarousel />
        </LazyLoadComponent>
      </div>
    </div>
  );
};

export default FeaturesContainer;
