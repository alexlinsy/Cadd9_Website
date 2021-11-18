import React from 'react';

import '../../styles/structure/footer.scss'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
    <div className="footer mt-10 flex flex-justify-center flex-align-center flex-column">
      <p className="font-heading-english f-24">
        &copy; Cadd9 <span className="font-heading">艺术音乐中心</span> {`${currentYear}`}
      </p>
      <div className="flex flex-align-center flex-column-md-max">
        <p className="mb-0 f-11 leading-normal pr-2">Cadd9 音乐艺术中心是北京妙手天成教育咨询有限公司旗下品牌</p>
        <a href="http://beian.miit.gov.cn" className="web-id-number f-11">京ICP备2021035395</a>
      </div>
    </div>
)}

export default Footer;