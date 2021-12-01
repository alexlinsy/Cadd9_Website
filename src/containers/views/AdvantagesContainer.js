import React from 'react';
import AdvantagesCard from '../../components/elements/AdvantagesCard';
import HeaderSection from '../../components/elements/HeaderSection';
import {advantagesData} from '../../data/advantages-data';
import {Helmet} from 'react-helmet';

import '../../styles/views/advantages.scss';

const AdvantagesContainer = () => {
  const {header, content} = advantagesData;
  return (
    <div className="px-10 advantages-container">
       <Helmet>
        <meta charSet="utf-8" />
        <title>Cadd9 我们的优势</title>
        <meta name="description" content="Cadd9 公司优势介绍" />
      </Helmet>
      <HeaderSection title={header} borderRequired />
      <div className="mt-5 flex flex-wrap flex-space-between flex-column-lg-max flex-align-center-lg-max advantages-section">
        {content.map((item, index) => (
          <AdvantagesCard advantagesData={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AdvantagesContainer;
