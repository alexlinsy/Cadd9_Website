import React from "react";
import { useEffect, useState } from "react";
import HeaderSection from "../../components/elements/HeaderSection";
import PartnerBox from "../../components/elements/PartnersBox";
// import { partnerData } from "../../data/partner-data";
import { Helmet } from "react-helmet-async";
import useContentful from "../../hooks/useContentful";

import "../../styles/views/partners.scss";

const PartnersContainer = () => {
  const [businessPartners, setBusinessPartners] = useState([]);
  const [eduPartners, setEduPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { getPartners } = useContentful();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { bussinessPartners: bp, eduPartnerEntries: ep } =
          await getPartners();
        bp.reverse();
        ep.reverse();
        setBusinessPartners(bp);
        setEduPartners(ep);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError("加载数据失败");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-10 partners-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cadd9 合作伙伴</title>
        <meta name="description" content="Cadd9 合作伙伴展示" />
      </Helmet>
      <HeaderSection title="商业合作伙伴" borderRequired />
      <p className="mt-5 mb-0 partner-intro-text leading-normal flex flex-column flex-justify-center text-center">
        <span>创始人与其余Cadd9导师从未停止过在音乐产业的征途，</span>
        <span>以下合作方与院校都与我们有良好合作关系，</span>{" "}
        <span>音乐教育是Cadd9一半的家的话，</span>音乐产业就是Cadd9的另一半家。
      </p>

      {loading ? (
        <p className="message">加载中...</p>
      ) : error ? (
        <p className="message">{error}</p>
      ) : (
        <div className="mt-5 flex flex-wrap flex-justify-center partners-icons">
          {businessPartners.map((item, index) => (
            <PartnerBox partner={item} key={index} />
          ))}
        </div>
      )}

      <HeaderSection title="院校合作伙伴" />
      {loading ? (
        <p className="message">加载中...</p>
      ) : error ? (
        <p className="message">{error}</p>
      ) : (
        <div className="mt-5 flex flex-wrap flex-justify-center partners-icons partners-icons-edu">
          {eduPartners.map((item, index) => (
            <PartnerBox partner={item} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PartnersContainer;
