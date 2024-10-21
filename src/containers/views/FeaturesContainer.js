import { useState, useEffect } from "react";
import FeatureCard from "../../components/elements/FeatureCard";
// import { featuresData } from "../../data/features-data";
import ScrollAnimation from "react-animate-on-scroll";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import HeaderSection from "../../components/elements/HeaderSection";
import FeaturesCategoryCardCarousel from "../../components/elements/FeaturesCategoryCardCarousel";
import { Helmet } from "react-helmet-async";

import "react-lazy-load-image-component/src/effects/blur.css";
import "../../styles/views/features.scss";
import useContentful from "../../hooks/useContentful";

const FeaturesContainer = () => {
  const [features, setFeatures] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { getFeatures } = useContentful();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFeatures();
        // sort features based on ordering
        data.sort((a, b) => +a.ordering - +b.ordering);
        setFeatures(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError("加载“服务特色”数据失败");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="feature-container px-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cadd9 课程特色</title>
        <meta name="description" content="Cadd9 课程介绍 课程设计" />
      </Helmet>
      <HeaderSection title="服务特色" borderRequired />
      <div className="flex flex-column">
        {loading ? (
          <p className="message">加载中...</p>
        ) : error ? (
          <p className="message">{error}</p>
        ) : (
          features.map((feature, index) => {
            if (+feature.ordering % 2 == 1) {
              return (
                <ScrollAnimation
                  key={index}
                  className="flex flex-column-md-max flex-space-between full-width mt-5 flex-align-center"
                  animateIn="fadeIn"
                  duration={3}
                >
                  <FeatureCard data={feature} />
                  <div className="feature-image-container">
                    <LazyLoadImage
                      src={feature.image}
                      alt="cadd9 课程特色"
                      className="full-width"
                      effect="blur"
                    />
                  </div>
                </ScrollAnimation>
              );
            } else {
              return (
                <ScrollAnimation
                  key={index}
                  className="flex flex-column-md-max flex-space-between full-width mt-5 flex-align-center"
                  animateIn="fadeIn"
                  duration={3}
                >
                  <div className="feature-image-container feature-image-two">
                    <LazyLoadImage
                      src={feature.image}
                      alt="cadd9 课程特色"
                      className="full-width"
                      effect="blur"
                    />
                  </div>
                  <FeatureCard data={feature} />
                  <div className="feature-image-container feature-image-two-mobile">
                    <LazyLoadImage
                      src={feature.image}
                      alt="cadd9 课程特色"
                      className="full-width"
                      effect="blur"
                    />
                  </div>
                </ScrollAnimation>
              );
            }
          })
        )}

        <ScrollAnimation
          className="mt-10 py-8 border-top border-bottom"
          animateIn="fadeIn"
          duration={3}
        >
          <p
            className="font-heading text-center m-0 feature-header-two"
            style={{ fontSize: "46px" }}
          >
            课程种类
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
