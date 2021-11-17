import React, {useState} from 'react';
import {motion} from 'framer-motion';
import routes, {steps} from '../../configuration/router';
import {Link} from 'react-router-dom';

import '../../styles/structure/navigation.scss';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleNavItemClicked() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setIsOpen(false);
  }
  return (
    <>
      <nav
        className={`nav-bar ${
          isOpen ? 'open-nav-bar' : ''
        } pt-2 full-width flex flex-space-around flex-column-sm-max flex-align-center-sm-max`}
      >
        {steps.map((item, index) => (
          <Link
            className="nav-item"
            key={index}
            to={item.value}
            onClick={() => handleNavItemClicked()}
          >
            <motion.p
              className="font-heading"
              whileHover={{letterSpacing: '15px'}}
              transition={{duration: 0.5}}
            >
              {item.title}
            </motion.p>
          </Link>
        ))}
      </nav>
      <div className="nav-bar-mobile flex flex-space-between px-5 flex-align-center">
        <div className="flex flex-align-center">
          <div className={`${isOpen ? 'open' : ''} nav-mobile-button`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Link
            className="nav-item"
            to={routes.home}
            onClick={() => handleNavItemClicked()}
          >
            <p className="font-heading-english ml-5 mb-0 f-20">Cadd9</p>
          </Link>
          <p className="font-heading ml-5 mb-0 f-20">音乐</p>
        </div>
        <div>
          <p className="font-heading mb-0 f-20" style={{textAlign: 'left'}}>
            艺术中心
          </p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
