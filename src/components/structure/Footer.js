import React from 'react';

import '../../styles/structure/footer.scss'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
    <div className="footer mt-10 flex flex-justify-center flex-align-center">
      <p className="font-heading-english f-24">
        &copy; {`Cadd9 Branding ${currentYear}`}
      </p>
    </div>
)}

export default Footer;