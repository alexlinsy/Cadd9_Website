import React from 'react';
import AdvantagesCard from '../../components/elements/AdvantagesCard';
import {advantagesData} from '../../data/advantages-data';

import '../../styles/views/advantages.scss';

const AdvantagesContainer = () => {
  const {header, content} = advantagesData;
  return (
    <div className="px-10 advantages-container">
      <div className="mt-10 py-8 border-top border-bottom">
        <p
          className="font-heading text-center f-32 m-0"
          style={{fontSize: '46px'}}
        >
          {header}
        </p>
      </div>
      <div className="mt-5 flex flex-wrap flex-space-between flex-column-lg-max flex-align-center-lg-max">
        {content.map((item, index) => (
          <AdvantagesCard advantagesData={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AdvantagesContainer;
