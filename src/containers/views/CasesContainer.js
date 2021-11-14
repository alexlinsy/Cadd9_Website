import React from 'react';
import CasesExample from '../../components/elements/CasesExample';
import CasesCardCarousel from '../../components/elements/CasesCardCarousel';
import {casesData} from '../../data/cases-data';
import '../../styles/views/cases.scss';

const CasesContainer = () => {
  const {header, casesExample, caseInfo} = casesData;
  return (
    <div className="flex flex-column px-10 cases-container">
      <div className="mt-10 py-8 border-top border-bottom">
        <p
          className="font-heading text-center f-32 m-0"
          style={{fontSize: '46px'}}
        >
          {header}
        </p>
      </div>
      <div className="py-10 px-15 flex flex-space-between flex-column-lg-max">
        <CasesExample caseImage={casesExample[0]} offerInfo={caseInfo[0]} />
        <CasesExample caseImage={casesExample[1]} offerInfo={caseInfo[1]} />
      </div>
      <div className="mb-20">
        <CasesCardCarousel cases={casesExample} />
      </div>
    </div>
  );
};

export default CasesContainer;
