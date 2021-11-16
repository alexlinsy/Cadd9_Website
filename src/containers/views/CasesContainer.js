import React from 'react';
import CasesExample from '../../components/elements/CasesExample';
import CasesCardCarousel from '../../components/elements/CasesCardCarousel';
import {casesData} from '../../data/cases-data';
import '../../styles/views/cases.scss';
import HeaderSection from '../../components/elements/HeaderSection';

const CasesContainer = () => {
  const {header, casesExample, caseInfo} = casesData;
  return (
    <div className="flex flex-column px-10 cases-container">
      <HeaderSection title={header} borderRequired />
      <div className="py-10 px-15 flex flex-space-between flex-column-lg-max cases-example">
        <CasesExample caseImage={casesExample[0]} offerInfo={caseInfo[0]} />
        <CasesExample caseImage={casesExample[1]} offerInfo={caseInfo[1]} />
      </div>
      <div className="case-card-carousel-container">
        <CasesCardCarousel cases={casesExample} />
      </div>
    </div>
  );
};

export default CasesContainer;
