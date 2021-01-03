import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './Styles/Styles.css';
// import './Styles/App.min.css';

import MainSite from './Sites/MainSite';
import BetSite from './Sites/BetSite';
import RegisterSite from './Sites/RegisterSite';
import TableSite from './Sites/TableSite';
import CompetitionSite from './Sites/CompetitionSite';
import RulesSite from './Sites/RulesSite';

function App() {

  const location = useLocation();
 
  return (
    <>
      <TransitionGroup>
        <CSSTransition 
          key={location.key}
          timeout={300}
          classNames='fade'>
          <Switch location={location}>
            <Route path="/" exact component={MainSite} />
            <Route path="/bet" exact component={BetSite} />
            <Route path="/register" exact component={RegisterSite} />
            <Route path="/table" exact component={TableSite} />
            <Route path="/competition" exact component={CompetitionSite} />
            <Route path="/rules" exact component={RulesSite} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
