import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {steps} from '../../configuration/router';
import {Link} from 'react-router-dom';

import '../../styles/structure/navigation.scss';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleNavItemClicked() {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
    setIsOpen(false);
  }
  return (
    <>
      <nav className={`nav-bar ${isOpen ? 'open-nav-bar' : ''} pt-2 full-width flex flex-space-around flex-column-sm-max flex-align-center-sm-max`}>
        {steps.map((item, index) => (
          <Link className="nav-item" key={index} to={item.value} onClick={() => handleNavItemClicked()}>
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

      <i className="fas fa-bars menu-bar-item fa-2x" onClick={() => setIsOpen(!isOpen)}></i>
    </>
  );
};

export default Navigation;
