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
      <p className="mt-5 mb-0 partner-intro-text leading-normal flex flex-column flex-justify-center text-center">
        <span>创始人与其余Cadd9导师从未停止过在音乐产业的征途，</span>
        <span>以下合作方与院校都与我们有良好合作关系，</span>{' '}
        <span>音乐教育是Cadd9一半的家的话，</span>音乐产业就是Cadd9的另一半家。
      </p>
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
