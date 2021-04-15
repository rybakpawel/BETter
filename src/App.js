import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import AuthContext from './context/authContext'
import DeviceContext from './context/deviceContext'
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

  const checkOrientation = () => {
    const { innerWidth: width, innerHeight: height } = window
    if (width > height) return 'landscape'
    else if (width < height && width > 599) return 'portrait-tablet'
    else return 'portrait'
  }

  const [isLogged, setIsLogged] = useState(false)
  const [orientation, setOrientation] = useState(checkOrientation())
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [isLoginActive, setIsLoginActive] = useState(false)

  const [zIndex, setZIndex] = useState(isMenuActive ? 'navigation--active-z-index' : '');
  const [isAnimationActive, setIsAnimationActive] = useState('');

  const changeOrientation = () => {
    const { innerWidth: width, innerHeight: height } = window
    if (width > height) setOrientation('landscape') 
    else if (width < height && width > 599) setOrientation('portrait-tablet')
    else setOrientation('portrait')
  }

  const menuAnimation = () => {
    let time = 0;
    if (orientation !== 'portrait') time = 300;
    if (!isMenuActive) {
        setIsAnimationActive('navigation--animation-menu-in');
        setTimeout(() => {
            setZIndex('navigation--active-z-index');
        }, time);
    } else {
        setIsAnimationActive('navigation--animation-menu-out');
        setTimeout(() => {
            setZIndex('')
        }, 300);
    }
}

  const toggleActiveMenu = () => {
    setIsMenuActive(!isMenuActive)
    menuAnimation();
  }

  const toggleActiveLogin = () => {
    setIsLoginActive(!isLoginActive)
  }

  const location = useLocation();
  
  return (
    <>
      <AuthContext.Provider value={{ isLogged, setIsLogged }}>
        <DeviceContext.Provider value={{ orientation, changeOrientation }}>
        <LoginContext.Provider value={{ isLoginActive, toggleActiveLogin }}>
          <MenuContext.Provider value={{ isMenuActive, toggleActiveMenu, zIndex, isAnimationActive }}>
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
        </DeviceContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
