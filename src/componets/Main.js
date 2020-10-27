import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Contact from './Contact';
import LandingPage from './LandingPage'
import Projects from './Projects';
import Resume from './Resume';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/Resume" component={Resume} />
  </Switch>
)

export default Main;