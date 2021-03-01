import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import AuthContext from './context/authContext'
import LoginContext from './context/loginContext'
import MenuContext from './context/menuContext'

import MainSite from './Components/Sites/MainSite';
import BetSite from './Components/Sites/BetSite';
import RegisterSite from './Components/Sites/RegisterSite';
import TableSite from './Components/Sites/TableSite';
import CompetitionSite from './Components/Sites/CompetitionSite';
import RulesSite from './Components/Sites/RulesSite';

import './Styles/Styles.css';

function App() {

  const [isLogged, setIsLogged] = useState(true)
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [isLoginActive, setIsLoginActive] = useState(false)

  const toggleActiveMenu = () => {
    setIsMenuActive(!isMenuActive)
  }

  const toggleActiveLogin = () => {
    setIsLoginActive(!isLoginActive)
  }

  const location = useLocation();
  
  return (
    <>
      <AuthContext.Provider value={{ isLogged, setIsLogged }}>
        <LoginContext.Provider value={{ isLoginActive, toggleActiveLogin }}>
          <MenuContext.Provider value={{ isMenuActive, toggleActiveMenu }}>
            <TransitionGroup>
              <CSSTransition 
                key={location.key}
                timeout={300}
                classNames='fade'>
                <Switch location={location}>
                  <Route path="/" exact component={MainSite} />
                  <Route path="/bet" exact component={BetSite} />
                  <Route path="/competition" exact component={CompetitionSite} />
                  <Route path="/register" exact component={RegisterSite} />
                  <Route path="/rules" exact component={RulesSite} />
                  <Route path="/table" exact component={TableSite} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </MenuContext.Provider>
        </LoginContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
