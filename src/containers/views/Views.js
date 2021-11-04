import React from 'react';
import {Switch, Route} from 'react-router-dom';
import routes from '../../configuration/router';

import Home from './Home';
import AboutContainer from './AboutContainer';
import AdvantagesContainer from './AdvantagesContainer';
import CasesContainer from './CasesContainer';
import ContactContainer from './ContactContainer';
import FeaturesContainer from './FeaturesContainer';
import NewsContainer from './NewsContainer';
import PartnersContainer from './PartnersContainer';

const Views = () => (
  <Switch>
    <Route exact path={routes.home}>
      <Home />
    </Route>
    <Route exact path={routes.about}>
      <AboutContainer />
    </Route>
    <Route exact path={routes.cases}>
      <CasesContainer />
    </Route>
    <Route exact path={routes.advantages}>
      <AdvantagesContainer />
    </Route>
    <Route exact path={routes.features}>
      <FeaturesContainer />
    </Route>
    <Route exact path={routes.partners}>
      <PartnersContainer />
    </Route>
    <Route exact path={routes.contact}>
      <ContactContainer />
    </Route>
    <Route exact path={routes.news}>
      <NewsContainer />
    </Route>
  </Switch>
);

export default Views;
