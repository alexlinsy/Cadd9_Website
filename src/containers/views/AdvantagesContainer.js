import React from 'react';
import AdvantagesCard from '../../components/elements/AdvantagesCard';
import HeaderSection from '../../components/elements/HeaderSection';
import {advantagesData} from '../../data/advantages-data';

import '../../styles/views/advantages.scss';

const AdvantagesContainer = () => {
  const {header, content} = advantagesData;
  return (
    <div className="px-10 advantages-container">
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
