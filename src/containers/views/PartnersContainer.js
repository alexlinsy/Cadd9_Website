import React from 'react';
import HeaderSection from '../../components/elements/HeaderSection';
import PartnerBox from '../../components/elements/PartnersBox';
import {partnerData} from '../../data/partner-data';
import '../../styles/views/partners.scss';

const PartnersContainer = () => {
  const {headerBusiness, headerEdu, partnersBusiness, partnersEdu} =
    partnerData;

  return (
    <div className="px-10 partners-container">
      <HeaderSection title={headerBusiness} borderRequired />
      <div className="mt-5 flex flex-wrap flex-justify-center partners-icons">
        {partnersBusiness.map((item, index) => (
          <PartnerBox partner={item} key={index} />
        ))}
      </div>
      <HeaderSection title={headerEdu} />
      <div className="mt-5 flex flex-wrap flex-justify-center partners-icons partners-icons-edu">
        {partnersEdu.map((item, index) => (
          <PartnerBox partner={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PartnersContainer;
