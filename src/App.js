import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { LoginContext } from './context/loginContext'
import './Styles/Styles.css';

import MainSite from './Components/Sites/MainSite';
import BetSite from './Components/Sites/BetSite';
import RegisterSite from './Components/Sites/RegisterSite';
import TableSite from './Components/Sites/TableSite';
import CompetitionSite from './Components/Sites/CompetitionSite';
import RulesSite from './Components/Sites/RulesSite';

function App() {

  const [isLogged, setIsLogged] = useState(false)

  const location = useLocation();
 
  return (
    <>
      <LoginContext.Provider value={{ isLogged, setIsLogged }}>
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
      </LoginContext.Provider>
    </>
  );
}

export default App;
