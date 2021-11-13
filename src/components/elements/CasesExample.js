import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';
import '../../styles/elements/case-card.scss';

const CasesExample = ({caseImage, offerInfo}) => {
  const {name, intro} = offerInfo;
  return (
    <div className="flex case-card">
      <LazyLoadImage src={caseImage} alt="offer" effect="blur" className="border"/>
      <div className="ml-5 flex flex-column flex-space-between">
        <div>
          <p className="f-28 bold mb-0 font-heading-english case-card-name">
            {name}
          </p>
        </div>
        <div className="case-intro">
          <p className="font-heading leading-normal mb-0">{intro}</p>
        </div>
      </div>
    </div>
  );
};

export default CasesExample;
