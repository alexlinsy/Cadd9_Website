import { useEffect, useState } from "react";
import CasesExample from "../../components/elements/CasesExample";
import CasesCardCarousel from "../../components/elements/CasesCardCarousel";
import HeaderSection from "../../components/elements/HeaderSection";
import { Helmet } from "react-helmet-async";
import useContentful from "../../hooks/useContentful";

import "../../styles/views/cases.scss";

const CasesContainer = () => {
  const [detailedCases, setDetailedCases] = useState([]);
  const [caseImages, setCaseImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { getCases } = useContentful();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { detailedCases: cases, caseImages: images } = await getCases();
        if (cases.length > 2) {
          setDetailedCases(cases.slice(0, 3));
        } else {
          setDetailedCases(cases);
        }

        setCaseImages(images);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError("加载数据失败");
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-column px-10 cases-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cadd9 录取案例</title>
        <meta name="description" content="Cadd9 录取offer展示" />
      </Helmet>
      <HeaderSection title="录取案例" borderRequired />

      {loading ? (
        <p className="message">加载中...</p>
      ) : error ? (
        <p className="message">{error}</p>
      ) : (
        <>
          <div className="py-10 px-15 flex flex-space-between flex-column-lg-max cases-example">
            {detailedCases.map((c, index) => (
              <CasesExample
                key={index}
                studentName={c.studentName}
                description={c.description}
                offerImage={c.offerImage}
              />
            ))}
          </div>
          <div className="case-card-carousel-container">
            <CasesCardCarousel cases={caseImages} />
          </div>
        </>
      )}
    </div>
  );
};

export default CasesContainer;
