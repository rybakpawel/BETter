import React from 'react';
import { Route, Switch } from 'react-router-dom'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './Styles/App.min.css';

import MainSite from './Sites/MainSite';
import LogInSite from './Sites/LogInSite';
import BetSite from './Sites/BetSite';
import RegisterSite from './Sites/RegisterSite';

function App() {
 
  return (
    <>
    {/* <Route render={( {location }) => (
      <TransitionGroup component='div' className="appTransition">
      <CSSTransition 
        key={location.key}
        timeout={10000}
        classNames='fade'> */}
        {/* <Switch location={location}> */}
        <Switch>
          <Route path="/" exact component={MainSite} />
          <Route path="/login" exact component={LogInSite} />
          <Route path="/bet" exact component={BetSite} />
          <Route path="/register" exact component={RegisterSite} />

        </Switch>
      {/* </CSSTransition>
    </TransitionGroup>
    )} /> */}
    
    </>
  );
}

export default App;
