import React from 'react';
import { advantagesData } from '../../data/advantages-data';

import '../../styles/views/advantages.scss';
const AdvantagesContainer= () => { 
  const {header} = advantagesData;
  return(
    <div className="px-10">
      <div className="mt-10 py-12 border-top border-bottom">
        <p className="font-heading text-center f-32 m-0" style={{fontSize: '65px'}}>{header}</p>
      </div>
    </div>
  )
}

export default AdvantagesContainer;