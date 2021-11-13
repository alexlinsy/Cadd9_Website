import React from 'react';
import PartnerBox from '../../components/elements/PartnersBox';
import {partnerData} from '../../data/partner-data';
import '../../styles/views/partners.scss';

const PartnersContainer = () => {
  const {headerBusiness, headerEdu, partnersBusiness, partnersEdu} =
    partnerData;

  return (
    <div className="px-10">
      <div className="mt-10 py-12 border-top border-bottom">
        <p
          className="font-heading text-center f-32 m-0"
          style={{fontSize: '65px'}}
        >
          {headerBusiness}
        </p>
      </div>
      <div className="mt-5 flex flex-wrap flex-justify-center partners-icons">
        {partnersBusiness.map((item, index) => (
          <PartnerBox partner={item} key={index} />
        ))}
      </div>
      <div className="mt-10 py-12">
        <p
          className="font-heading text-center f-32 m-0"
          style={{fontSize: '65px'}}
        >
          {headerEdu}
        </p>
      </div>
      <div className="mt-5 flex flex-wrap flex-justify-center partners-icons partners-icons-edu">
        {partnersEdu.map((item, index) => (
          <PartnerBox partner={item} key={index} />
        ))}
      </div>
      <div className="partners-footer full-width"/>
    </div>
  );
};

export default PartnersContainer;
