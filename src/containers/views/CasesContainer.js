import React from 'react';
import CasesExample from '../../components/elements/CasesExample';
import CasesCardCarousel from '../../components/elements/CasesCardCarousel';
import {casesData} from '../../data/cases-data';
import HeaderSection from '../../components/elements/HeaderSection';
import {Helmet} from 'react-helmet-async';

import '../../styles/views/cases.scss';

const CasesContainer = () => {
  const {header, casesExample, caseInfo} = casesData;
  return (
    <div className="flex flex-column px-10 cases-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cadd9 录取案例</title>
        <meta name="description" content="Cadd9 录取offer展示" />
      </Helmet>
      <HeaderSection title={header} borderRequired />
      <div className="py-10 px-15 flex flex-space-between flex-column-lg-max cases-example">
        <CasesExample caseImage={casesExample[0]} offerInfo={caseInfo[0]} />
        <CasesExample caseImage={casesExample[3]} offerInfo={caseInfo[1]} />
      </div>
      <div className="case-card-carousel-container">
        <CasesCardCarousel cases={casesExample} />
      </div>
    </div>
  );
};

export default CasesContainer;
