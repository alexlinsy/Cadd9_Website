import React from 'react';
import {motion} from 'framer-motion'
import {steps} from '../../configuration/router';
import {Link} from 'react-router-dom';

import '../../styles/structure/navigation.scss';

const Navigation = () => (
  <nav className="nav-bar">
    {steps.map((item, index) => (
      <Link className="nav-item" key={index} to={item.value}>
        <motion.p whileHover={{letterSpacing: '15px'}} transition={{duration: 0.5}}>{item.title}</motion.p>
      </Link>
    ))}
  </nav>
);

export default Navigation;
