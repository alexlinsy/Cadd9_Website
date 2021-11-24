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
import TeamsContainer from './TeamsContainer';
import Footer from '../../components/structure/Footer';

const Views = () => (
  <Switch>
    <Route exact path={routes.home}>
      <Home />
    </Route>
    <Route exact path={routes.about}>
      <AboutContainer />
      <Footer/>
    </Route>
    <Route exact path={routes.cases}>
      <CasesContainer />
      <Footer/>
    </Route>
    <Route exact path={routes.advantages}>
      <AdvantagesContainer />
      <Footer/>
    </Route>
    <Route exact path={routes.features}>
      <FeaturesContainer />
      <Footer/>
    </Route>
    <Route exact path={routes.partners}>
      <PartnersContainer />
      <Footer/>
    </Route>
    <Route exact path={routes.contact}>
      <ContactContainer />
      <Footer/>
    </Route>
    <Route exact path={routes.news}>
      <NewsContainer />
      <Footer/>
    </Route>
    <Route exact path={routes.teams}>
      <TeamsContainer />
      <Footer/>
    </Route>
  </Switch>
);

export default Views;
