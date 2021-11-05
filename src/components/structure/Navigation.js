import React from 'react';
import {steps} from '../../configuration/router';
import {Link} from 'react-router-dom';

import '../../styles/structure/navigation.scss';

const Navigation = () => (
  <nav className="nav-bar">
    {steps.map((item, index) => (
      <Link className="nav-item" key={index} to={item.value}>
        {item.title}
        <span className="nav-span">{item.subTitle}</span>
      </Link>
    ))}
  </nav>
);

export default Navigation;
