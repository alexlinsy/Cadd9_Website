import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TeamMembers from "../../components/elements/TeamMembers";
import AboutFirstSection from "../../components/elements/AboutFistSection";
import ImageCarousel from "../../components/elements/ImageCarousel";
import ScrollAnimation from "react-animate-on-scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { aboutContent } from "../../data/about-content";
// import { teamMembers } from "../../data/team-members";
import { Helmet } from "react-helmet-async";

import "../../styles/views/about.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
import useContentful from "../../hooks/useContentful";

const AboutContainer = () => {
  const { getAboutUsData } = useContentful();
  const [aboutUsData, setAboutUsData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAboutUsData();
        setAboutUsData(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError("加载关于我们数据失败");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="about-container px-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cadd9 关于我们</title>
        <meta name="description" content="Cadd9 公司介绍 团队介绍" />
      </Helmet>

      {loading ? (
        <p className="message">加载中...</p>
      ) : error ? (
        <p className="message">{error}</p>
      ) : (
        <>
          <ImageCarousel img={aboutUsData.introImage} />

          <div className="intro-section">
            <motion.p
              className="intro font-heading"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
            >
              {aboutUsData.introText}
            </motion.p>
          </div>
          <AboutFirstSection
            bodyImageOne={aboutUsData.bodyImageOne}
            bodyTextOne={aboutUsData.bodyTextOne}
            bodyImageTwo={aboutUsData.bodyImageTwo}
            bodyTextTwo={aboutUsData.bodyTextTwo}
          />

          <ScrollAnimation
            animateIn="fadeIn"
            duration={3}
            className="py-10 flex flex-column"
          >
            <LazyLoadImage
              src={aboutUsData.bannerImageOne}
              alt="cadd9 导语 banner"
              className="full-width"
            />
            <LazyLoadImage
              src={aboutUsData.bannerImageTwo}
              alt="cadd9 导语 banner"
              className="full-width"
            />
          </ScrollAnimation>
        </>
      )}

      {/* <TeamMembers /> */}
    </div>
  );
};

export default AboutContainer;
