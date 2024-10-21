import { useEffect, useState } from "react";
import AdvantagesCard from "../../components/elements/AdvantagesCard";
import HeaderSection from "../../components/elements/HeaderSection";
// import { advantagesData } from "../../data/advantages-data";
import { Helmet } from "react-helmet-async";

import "../../styles/views/advantages.scss";
import useContentful from "../../hooks/useContentful";

const AdvantagesContainer = () => {
  const [advantages, setAdvantages] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { getAdvantages } = useContentful();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAdvantages();
        // sort advantages based on id
        data.sort((a, b) => +a.id - +b.id);
        setAdvantages(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError("加载“我们的优势”数据失败");
      }
    };

    fetchData();
  }, []);
  return (
    <div className="px-10 advantages-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cadd9 我们的优势</title>
        <meta name="description" content="Cadd9 公司优势介绍" />
      </Helmet>
      <HeaderSection title="我们的优势" borderRequired />

      {loading ? (
        <p className="message">加载中...</p>
      ) : error ? (
        <p className="message">{error}</p>
      ) : (
        <div className="mt-5 flex flex-wrap flex-space-between flex-column-lg-max flex-align-center-lg-max advantages-section">
          {advantages.map((advantage, index) => (
            <AdvantagesCard advantage={advantage} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdvantagesContainer;
