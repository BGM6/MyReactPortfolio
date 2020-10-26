import React from 'react';
import { Switch } from 'react-mdl';
import { Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Contacts from './Contacts';
import LandingPage from './LandingPage'
import Projects from './Projects';
import Resume from './Resume';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
  </Switch>
)

export default Main;